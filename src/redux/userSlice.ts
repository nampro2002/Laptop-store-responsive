import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../types/types";

interface initState {
  users: IUser[];
}

const initialState: initState = {
  users: [],
};

export const getAllUser = createAsyncThunk("user/getAllUser", async () => {
  const res = await axios.get("http://localhost:4000/users");
  // console.log(res.data);
  return res.data;
});
export const register = createAsyncThunk(
  "user/register",
  async (newUser: Omit<IUser, "id">) => {
    const res = await axios.post("http://localhost:4000/users", newUser);
    return res.data;
  }
);
export const updateInfo = createAsyncThunk(
  "user/updateInfo",
  async (updatedInfo: Omit<IUser, "username" | "password" | "imgUrl">) => {
    const res = await axios.patch(
      `https://laptop-store-fakeapi-q49htehpo-nampro2002.vercel.app/users${updatedInfo.id}`,
      updatedInfo
    );
    return res.data;
  }
);
export const saveAddress = createAsyncThunk(
  "user/saveAddress",
  async ({ userId, address }: { userId: string; address: string }) => {
    const res = await axios.patch(
      `https://laptop-store-fakeapi-q49htehpo-nampro2002.vercel.app/users${userId}`,
      {
        address: address
      }
    );
    return res.data;
  }
);
export const updateAvatar = createAsyncThunk(
  "user/updateAvatar",
  async (
    updatedInfo: Omit<IUser, "password" | "name" | "phone" | "username">
  ) => {
    const res = await axios.patch(
      `https://laptop-store-fakeapi-q49htehpo-nampro2002.vercel.app/users${updatedInfo.id}`,
      updatedInfo
    );
    return res.data;
  }
);
export const updatePassword = createAsyncThunk(
  "user/updatePassword",
  async (
    updatedInfo: Omit<IUser, "name" | "phone" | "username" | "imgUrl">
  ) => {
    const res = await axios.patch(
      `https://laptop-store-fakeapi-q49htehpo-nampro2002.vercel.app/users${updatedInfo.id}`,
      updatedInfo
    );
    return res.data;
  }
);

const userSlice = createSlice({
  name: "user",
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
    builder
      .addCase(getAllUser.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(updateInfo.fulfilled, (state, action) => {
        localStorage.removeItem("user");
        const userInfo = JSON.stringify(action.payload);
        localStorage.setItem("user", userInfo);
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        localStorage.removeItem("user");
        const userInfo = JSON.stringify(action.payload);
        localStorage.setItem("user", userInfo);
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        localStorage.removeItem("user");
        const userInfo = JSON.stringify(action.payload);
        localStorage.setItem("user", userInfo);
      })
      .addCase(saveAddress.fulfilled, (state, action) => {
        localStorage.removeItem("user");
        const userInfo = JSON.stringify(action.payload);
        localStorage.setItem("user", userInfo);
      });
  },
});

const userReducer = userSlice.reducer;
export const { AcceptLogin, Logout } = userSlice.actions;
export default userReducer;
