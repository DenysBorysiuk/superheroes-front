import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://superheroes-f2qf.onrender.com/api";

export const fetchHeroes = createAsyncThunk(
  "heroes/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/heroes");
      console.log(response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addHero = createAsyncThunk(
  "heroes/addHero",
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post("/heroes", { name, number });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteHero = createAsyncThunk(
  "heroes/deleteHero",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/heroes/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateHero = createAsyncThunk(
  "heroes/updateContact",
  async ({ _id, name, number }, thunkAPI) => {
    try {
      const response = await axios.put(`/heroes/${_id}`, {
        name,
        number,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
