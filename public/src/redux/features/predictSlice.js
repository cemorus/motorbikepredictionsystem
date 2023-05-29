import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import * as api from "../api";


export const predictPrice = createAsyncThunk(
  "predictPrice",
  async ({updatedPredictData,navigate}, { rejectWithValue }) => {

    try {
      const response = await api.predictPrice(updatedPredictData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);


const predictSlice = createSlice({
  name: "predict",
  initialState: {
    prices: "",
    result:"",
    error: "",
    loading: false,
  },
  extraReducers: {
    [predictPrice.pending]: (state, action) => {
      state.loading = true;
    },
    [predictPrice.fulfilled]: (state, action) => {
      state.loading = false;
      state.prices = action.payload;
    },
    [predictPrice.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default predictSlice.reducer;
