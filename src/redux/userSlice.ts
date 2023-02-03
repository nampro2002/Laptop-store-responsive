import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../types/types";

interface initState {
  users: IUser[];
  user: IUser;
}

const initialState: initState = {
  users: [],
  user: {
    id: "",
    name: "",
    phone: "",
    username: "",
    password: "",
    imgUrl: "",
    address: "",
  },
};

export const getAllUser = createAsyncThunk("user/getAllUser", async () => {
  const res = await axios.get(
    "https://63dca59e2308e3e319eb1d2e.mockapi.io/user"
  );
  return res.data;
});
export const register = createAsyncThunk(
  "user/register",
  async (newUser: Omit<IUser, "id">) => {
    const res = await axios.post(
      "https://63dca59e2308e3e319eb1d2e.mockapi.io/user",
      newUser
    );
    return res.data;
  }
);
export const updateInfo = createAsyncThunk(
  "user/updateInfo",
  async (updatedInfo: Omit<IUser, "username" | "password" | "imgUrl">) => {
    const res = await axios.put(
      `https://63dca59e2308e3e319eb1d2e.mockapi.io/user/${updatedInfo.id}`,
      updatedInfo
    );
    return res.data;
  }
);
export const saveAddress = createAsyncThunk(
  "user/saveAddress",
  async ({ userId, address }: { userId: string; address: string }) => {
    const res = await axios.patch(
      `https://63dca59e2308e3e319eb1d2e.mockapi.io/user/${userId}`,
      {
        address: address,
      }
    );
    return res.data;
  }
);
export const updateAvatar = createAsyncThunk(
  "user/updateAvatar",
  async (updatedInfo: IUser) => {
    const res = await axios.put(
      `https://63dca59e2308e3e319eb1d2e.mockapi.io/user/${updatedInfo.id}`,
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
      `https://63dca59e2308e3e319eb1d2e.mockapi.io/user/${updatedInfo.id}`,
      updatedInfo
    );
    return res.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    GetUserInfo(state, action) {
      state.user = action.payload;
    },
    AcceptLogin(state, action) {
      const userInfo = JSON.stringify(action.payload);
      localStorage.setItem("user", userInfo);
      state.user = action.payload;
    },
    Logout(state) {
      localStorage.removeItem("user");
      state.user = {
        id: "",
        name: "",
        phone: "",
        username: "",
        password: "",
        imgUrl: "",
        address: "",
      };
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
        state.user = action.payload;
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        localStorage.removeItem("user");
        const userInfo = JSON.stringify(action.payload);
        localStorage.setItem("user", userInfo);
        state.user = action.payload;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        localStorage.removeItem("user");
        const userInfo = JSON.stringify(action.payload);
        localStorage.setItem("user", userInfo);
        state.user = action.payload;
      })
      .addCase(saveAddress.fulfilled, (state, action) => {
        localStorage.removeItem("user");
        const userInfo = JSON.stringify(action.payload);
        localStorage.setItem("user", userInfo);
        state.user = action.payload;
      });
  },
});

const userReducer = userSlice.reducer;
export const { AcceptLogin, Logout, GetUserInfo } = userSlice.actions;
export default userReducer;
