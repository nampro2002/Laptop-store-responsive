import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ICheckedout } from "../types/types";

interface initState {
  checkedoutList: ICheckedout[];
}

const initialState: initState = {
  checkedoutList: [],
};

export const getAllCheckedOut = createAsyncThunk(
  "checkedout/getAllCheckedOut",
  async (userId: string) => {
    const res = await axios.get(
      `https://laptop-store-fakeapi-q49htehpo-nampro2002.vercel.app/checkedout?userId=${userId}`
    );
    return res.data;
  }
);
export const addCheckedOut = createAsyncThunk(
  "checkedout/addCheckedOut",
  async (newCheckedOut: ICheckedout) => {
    const res = await axios.post(
      `https://laptop-store-fakeapi-q49htehpo-nampro2002.vercel.app/checkedout`,
      newCheckedOut
    );
    return res.data;
  }
);

const checkedoutSlice = createSlice({
  name: "checkedout",
  initialState,
  reducers: {
    AcceptLogin(state, action) {
      const userInfo = JSON.stringify(action.payload);
      localStorage.setItem("user", userInfo);
    },
    Logout(state) {
      localStorage.removeItem("user");
    },
  },
  extraReducers(builder) {
    builder.addCase(getAllCheckedOut.fulfilled, (state, action) => {
      state.checkedoutList = action.payload;
    }).addCase(addCheckedOut.fulfilled, (state, action) => {
      state.checkedoutList.push(action.payload)
    });
  },
});

const checkedoutReducer = checkedoutSlice.reducer;
export const { AcceptLogin, Logout } = checkedoutSlice.actions;
export default checkedoutReducer;
