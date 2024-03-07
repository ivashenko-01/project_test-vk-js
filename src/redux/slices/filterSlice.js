import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    privacy: {
        select: "По типу приватности",
    },
    friends: {
        select: "По наличию друзей",
    },
    avatarColor: {
        select: "По цвету аватарки",
    },
};

export const filterSlice = createSlice({
    name: "filters",
    initialState: initialState,
    reducers: {
        setPrivacy: (state, action) => {
            state.privacy.select = action.payload;
        },
        setFriends: (state, action) => {
            state.friends.select = action.payload;
        },
        setAvatarColor: (state, action) => {
            state.avatarColor.select = action.payload;
        },
    },
});

export const { setPrivacy, setFriends, setAvatarColor } = filterSlice.actions;

export default filterSlice.reducer;
