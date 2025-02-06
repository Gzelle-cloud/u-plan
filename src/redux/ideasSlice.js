import { createSlice } from "@reduxjs/toolkit";

export const ideasSlice = createSlice({
  name: 'ideas',
  initialState: {
    selectedCategory: "All"
  },
  
  reducers: {
    filterCategory: (state, action) => {
      state.selectedCategory = action.payload
    },
  },
})

export const getSelectedCategory = state => state.ideas.selectedCategory;

export const { filterCategory } = ideasSlice.actions
export default ideasSlice.reducer; 