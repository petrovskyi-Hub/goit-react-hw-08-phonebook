import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contacts-operations';
import { authOperations } from '../auth';

const initialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsOperations.fetchContacts.fulfilled](state, action) {
      state.items = action.payload;
    },
    [contactsOperations.addContact.fulfilled](state, action) {
      state.items = [...state.items, action.payload];
    },
    [contactsOperations.deleteContact.fulfilled](state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload,
      );
    },
    [authOperations.logOut.fulfilled](state, action) {
      state.items = [];
    },
  },
});

export default contactsSlice.reducer;
