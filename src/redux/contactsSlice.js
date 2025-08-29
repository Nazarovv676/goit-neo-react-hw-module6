import { createSlice } from "@reduxjs/toolkit";
import contactsList from "../data/contactsList.json";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: contactsList,
  },
  reducers: {
    addContact: (state, action) => {
      const isDuplicateNumber = state.items.some(
        (contact) => contact.number === action.payload.number
      );
      if (!isDuplicateNumber) {
        state.items.push(action.payload);
      }
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
