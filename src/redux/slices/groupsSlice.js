import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import listProduct from "../../assets/database/groups.json";

const initialState = {
    result: 0,
    group: [],
    isLoading: true,
};

// --- Получение списка групп
export const getListGroup = createAsyncThunk("groups/getListGroup", async () => {
    // -- Якобы запрос, а так с помощью Axios/Fetch отправляем
    const data = listProduct;

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await sleep(1000);

    return data;
});

export const groupsSlice = createSlice({
    name: "groups",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        // --- Получение списка товаров
        builder.addCase(getListGroup.pending, (state) => {
            state.result = 0;
            state.isLoading = true;
        });
        builder.addCase(getListGroup.fulfilled, (state, action) => {
            state.result = 1;
            state.group = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getListGroup.rejected, (state) => {
            state.result = 0;
            state.isLoading = false;
        });
    },
});

export default groupsSlice.reducer;
