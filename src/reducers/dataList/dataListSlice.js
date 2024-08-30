import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk(
  "dataList/getData",
  async () => {
    const {data} = await axios.get("https://664ca5b335bbda1098814d7e.mockapi.io/data")
    return data;
  }
)


export const dataListSlice = createSlice({
  name: "dataList",
  initialState: {
    data: [],
    search: "",
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
     .addCase(getData.fulfilled, (state, action) => {
        state.data = action.payload;
      })
     .addCase(getData.rejected, (state, action) => {
        console.log("Error fetching data:", action.error.message);
      })
  }
});

// Action creators are generated for each case reducer function
export const {setSearch} = dataListSlice.actions;

export default dataListSlice.reducer;
