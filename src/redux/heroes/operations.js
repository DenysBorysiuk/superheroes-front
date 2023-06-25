import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://superheroes-f2qf.onrender.com/api";

export const fetchHeroes = createAsyncThunk(
  "heroes/fetchAll",
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/heroes?page=${page}&limit=5`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addHero = createAsyncThunk(
  "heroes/addHero",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post("/heroes", formData);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteHero = createAsyncThunk(
  "heroes/deleteHero",
  async (heroId, thunkAPI) => {
    try {
      const response = await axios.delete(`/heroes/${heroId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateHero = createAsyncThunk(
  "heroes/updateContact",
  async ([_id, formData], thunkAPI) => {
    try {
      const response = await axios.put(`/heroes/${_id}`, formData);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
