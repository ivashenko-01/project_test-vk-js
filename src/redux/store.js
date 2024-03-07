import { configureStore } from "@reduxjs/toolkit";

import groupsSlice from "./slices/groupsSlice";
import filterSlice from "./slices/filterSlice";

export const store = configureStore({
    reducer: {
        groups: groupsSlice,
        filterGroup: filterSlice,
    },
});
