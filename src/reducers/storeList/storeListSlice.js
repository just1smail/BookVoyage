import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getData2 = createAsyncThunk("storeList/getData2", async () => {
  const { data } = await axios.get(
    "https://664ca5b335bbda1098814d7e.mockapi.io/store"
  );
  return data;
});

export const postData = createAsyncThunk(
  "storeList/postData",
  async (odj, { dispatch }) => {
    const { data } = await axios.post(
      "https://664ca5b335bbda1098814d7e.mockapi.io/store",
      odj
    );
    dispatch(getData2);
  }
);

export const deleteData = createAsyncThunk(
  "storeList/deleteData",
  async (id, { dispatch }) => {
    console.log(id);
    const { data } = await axios.delete(
      "https://664ca5b335bbda1098814d7e.mockapi.io/store/" + id
    );
    dispatch(getData2());
  }
);

export const storeListSlice = createSlice({
  name: "storeList",
  initialState: {
    data2: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData2.fulfilled, (state, action) => {
        state.data2 = action.payload;
      })
      .addCase(getData2.rejected, (state, action) => {
        console.error("Error:", action.error.message);
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = storeListSlice.actions;

export default storeListSlice.reducer;
