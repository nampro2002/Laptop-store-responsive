import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "../types/types";

interface ICart {
  id: string;
  prodId: string;
  userId: string;
  quantity: number;
}
interface initState {
  cartList: ICart[];
}
const initialState: initState = {
  cartList: [],
};

export const getAllCart = createAsyncThunk(
  "cartList/getAllCart",
  async (userId: string) => {
    const res = await axios.get(`https://laptop-store-fakeapi-q49htehpo-nampro2002.vercel.app/cart?userId=${userId}`);
    // console.log("cart", res.data);
    // console.log("get");
    return res.data;
  }
);
export const CheckCart = createAsyncThunk(
  "cartList/CheckCart",
  async (
    {
      productId,
      quantity,
      userId,
    }: { productId: string; quantity: number; userId: string },
    thunkAPI
  ) => {
    const res = await axios.get("https://laptop-store-fakeapi-q49htehpo-nampro2002.vercel.app/cart");
    const cartList = res.data;
    const productCart: Omit<ICart, "id"> = {
      prodId: productId,
      userId,
      quantity: quantity,
    };
    const isAdded = cartList.some((prod: ICart) => {
      if (prod.prodId === productId) {
        thunkAPI.dispatch(
          updateToCart({
            id: prod.id,
            userId,
            prodId: prod.prodId,
            quantity: prod.quantity + quantity,
          })
        );
        return true;
      }
      return false;
    });
    if (!isAdded) {
      thunkAPI.dispatch(addToCart(productCart));
    }
    console.log("check");
    console.log("isAdded", isAdded);
  }
);
export const updateToCart = createAsyncThunk(
  "cartList/updateToCart",
  async (productCart: ICart) => {
    const res = await axios.put<ICart>(
      `https://laptop-store-fakeapi-q49htehpo-nampro2002.vercel.app/cart/${productCart.id}`,
      productCart
    );
    console.log("update");
    return res.data;
  }
);
export const decreaseQuantity = createAsyncThunk(
  "cartList/decreaseQuantity",
  async (productCart: ICart) => {
    const res = await axios.put<ICart>(
      `https://laptop-store-fakeapi-q49htehpo-nampro2002.vercel.app/cart/${productCart.id}`,
      productCart
    );
    return res.data;
  }
);
export const increaseQuantity = createAsyncThunk(
  "cartList/increaseQuantity",
  async (productCart: ICart) => {
    const res = await axios.put<ICart>(
      `https://laptop-store-fakeapi-q49htehpo-nampro2002.vercel.app/cart/${productCart.id}`,
      productCart
    );
    return res.data;
  }
);
export const addToCart = createAsyncThunk(
  "cartList/addToCart",
  async (productCart: Omit<ICart, "id">) => {
    console.log("add");
    const res = await axios.post<ICart>(
      "https://laptop-store-fakeapi-q49htehpo-nampro2002.vercel.app/cart",
      productCart
    );
    return res.data;
  }
);
export const removeFromCart = createAsyncThunk(
  "cartList/removeFromCart",
  async (productCartId: string) => {
    await axios.delete(`https://laptop-store-fakeapi-q49htehpo-nampro2002.vercel.app/cart/${productCartId}`);
    // console.log("remove");
    return productCartId;
  }
);
export const removeAllFromCart = createAsyncThunk(
  "cartList/removeAllFromCart",
  async (cartList: ICart[], thunkAPI) => {
    cartList.forEach((cart) => {
      thunkAPI.dispatch(removeFromCart(cart.id));
    });
  }
);

const cartSlice = createSlice({
  name: "cartList",
  initialState,
  reducers: {
    logOutRemoveCart: (state) => {
      state.cartList = []
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getAllCart.fulfilled, (state, action) => {
        // console.log("get-fullfilled");
        state.cartList = action.payload;
      })
      .addCase(CheckCart.fulfilled, () => {
        // console.log("check-fullfilled");
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        // console.log("add-fullfilled");
        state.cartList.push(action.payload);
      })
      .addCase(updateToCart.fulfilled, (state, action) => {
        // console.log("up-fullfilled");
        state.cartList.some((product) => {
          if (product.prodId === action.payload.prodId) {
            product.quantity += 1;
            return true;
          }
          return false;
        });
      })
      .addCase(decreaseQuantity.fulfilled, (state, action) => {
        // console.log("decrease-fullfilled");
        state.cartList.some((product) => {
          if (product.prodId === action.payload.prodId) {
            product.quantity -= 1;
            return true;
          }
          return false;
        });
      })
      .addCase(increaseQuantity.fulfilled, (state, action) => {
        // console.log("increase-fullfilled");
        state.cartList.some((product) => {
          if (product.prodId === action.payload.prodId) {
            product.quantity += 1;
            return true;
          }
          return false;
        });
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        // console.log("remv-fullfilled");
        state.cartList = state.cartList.filter(
          (prod) => prod.id !== action.payload
        );
        console.log("cartList", state.cartList);
      })
      .addCase(removeAllFromCart.fulfilled, (state, action) => {
        // console.log("remv-fullfilled");
        state.cartList = [];
      });
  },
});
const cartReducer = cartSlice.reducer;
export const {logOutRemoveCart} = cartSlice.actions;
export default cartReducer;
