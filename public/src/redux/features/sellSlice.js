import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const sellBike = createAsyncThunk(
  "sell/sellBike",
  async ({ updatedBikeData, navigate, toast }, { rejectWithValue }) => {
    console.log(updatedBikeData);
    try {
      const response = await api.sellBike(updatedBikeData);
      toast.success("Bike added Successful");
      console.log(response);
      navigate("/");

      return response?.data;
      
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);


export const getBikes = createAsyncThunk(
  "sell/getBikes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getBikes();
      return response.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);



export const getBike = createAsyncThunk(
  "sell/getBike",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.getBike(id);
      return response.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);

export const getBikesByUser = createAsyncThunk(
  "sell/getBikesByUser",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await api.getBikesByUser(userId);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteBike = createAsyncThunk(
  "sell/deleteBike",
  async ({ id, toast }, { rejectWithValue }) => {
    try {
      const response = await api.deleteBike(id);
      toast.success("Bike deleted Successfully");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateBike = createAsyncThunk(
  "sell/updateBike",
  async ({ id, updatedBikeData, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.updateBike(updatedBikeData, id);
      toast.success("Bike Updated Successfully");
      navigate("/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);

export const searchBikes = createAsyncThunk(
  "sell/searchBikes",
  async (searchQuery, { rejectWithValue }) => {
    try {
      const response = await api.getBikesBySearch(searchQuery);
      return response.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);

const sellSlice = createSlice({
  name: "sell",
  initialState: {
    bike: {},
    bikes: [],
    userBikes: [],
    price: "",
    error: "",
    loading: false,
  },
  extraReducers: {
    [sellBike.pending]: (state, action) => {
      state.loading = true;
    },
    [sellBike.fulfilled]: (state, action) => {
      state.loading = false;
      state.bikes = [action.payload];
    },
    [sellBike.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [getBikes.pending]: (state, action) => {
      state.loading = true;
    },
    [getBikes.fulfilled]: (state, action) => {
      state.loading = false;
      state.bikes = action.payload;
    },
    [getBikes.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [getBike.pending]: (state, action) => {
      state.loading = true;
    },
    [getBike.fulfilled]: (state, action) => {
      state.loading = false;
      state.bike = action.payload;
    },
    [getBike.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getBikesByUser.pending]: (state, action) => {
      state.loading = true;
    },
    [getBikesByUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.userBikes = action.payload;
    },
    [getBikesByUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [deleteBike.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteBike.fulfilled]: (state, action) => {
      state.loading = false;
      console.log("action", action);
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.userBikes = state.userBikes.filter((item) => item._id !== id);
        state.bikes = state.bikes.filter((item) => item._id !== id);
      }
    },
    [deleteBike.rejected]: (state, action) => {
      state.loading = false;
      state.error = action?.payload?.message;
    },
    [updateBike.pending]: (state, action) => {
      state.loading = true;
    },
    [updateBike.fulfilled]: (state, action) => {
      state.loading = false;
      console.log("action", action);
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.userBikes = state.userBikes.map((item) =>
          item._id === id ? action.payload : item
        );
        state.bikes = state.bikes.map((item) =>
          item._id === id ? action.payload : item
        );
      }
    },
    [updateBike.rejected]: (state, action) => {
      state.loading = false;
      state.error = action?.payload?.message;
    },
    [searchBikes.pending]: (state, action) => {
      state.loading = true;
    },
    [searchBikes.fulfilled]: (state, action) => {
      state.loading = false;
      state.userBikes = action.payload;
    },
    [searchBikes.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default sellSlice.reducer;
