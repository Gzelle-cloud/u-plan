import { createSlice } from "@reduxjs/toolkit";

export const workshopSlice = createSlice({
  name: 'workshop',
  initialState: {
    workshopItems: JSON.parse(localStorage.getItem("workshopItems")) || []
  },
  
  reducers: {
    addItemtoWorkshop: (state, action) => {
      if (!state.workshopItems.find(item => item.title === action.payload.title)) {
        state.workshopItems.push({
          title: action.payload.title,
          category: action.payload.category,
          description: action.payload.description,
          done: false,
        });
 
          localStorage.setItem("workshopItems", JSON.stringify(state.workshopItems));
      }  
   
    },

    toggleDoneFlag: (state, action) => {
      const item = state.workshopItems.find((item) => item.title === action.payload.title);
      if (item) {
        item.done = !item.done; 
        localStorage.setItem("workshopItems", JSON.stringify(state.workshopItems));
      }
    },

    removeItemFromWorkshop: (state, action) => {
      state.workshopItems = state.workshopItems.filter(
        workshopItem => workshopItem.title !== action.payload.title
      )
      localStorage.setItem("workshopItems", JSON.stringify(state.workshopItems));
    }
  },
})

export const getWorkshopItems = state => state.workshop.workshopItems;

export const { addItemtoWorkshop, toggleDoneFlag, removeItemFromWorkshop } = workshopSlice.actions;
export default workshopSlice.reducer; 