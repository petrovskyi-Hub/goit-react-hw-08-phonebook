import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// await axios.post('/users/signup', credentials);

const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const changeContact = createAsyncThunk(
  'contacts/changeContact',
  async (contactID, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/contacts/${contactID}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const operations = {
  fetchContacts,
  addContact,
  deleteContact,
  changeContact,
};
export default operations;
