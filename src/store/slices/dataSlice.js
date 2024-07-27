import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    languageSelection: "english",
    languageExplanation: "german",
    level: "A1"
};

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        changeLanguageSelection: (state, action) => {
            state.languageSelection = action.payload;
        },
        changeLanguageExplanation: (state, action) => {
            state.languageExplanation = action.payload;
        },
        changeLevel: (state, action) => {
            state.level = action.payload;
        },
    },
});

export const { changeLanguageSelection, changeLanguageExplanation, changeLevel } = dataSlice.actions;

export default dataSlice.reducer;
