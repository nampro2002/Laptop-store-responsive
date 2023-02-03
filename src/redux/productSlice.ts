import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ICategory, IProduct } from "../types/types";

interface initState {
  productList: IProduct[];
  category: ICategory[];
  productCarousel: IProduct[];
}

const initialState: initState = {
  productList: [],
  category: [],
  productCarousel: [],
};

export const getTypicalProduct = createAsyncThunk(
  "products/getTypicalProduct",
  async () => {
    const res = await axios.get("https://6266262cdbee37aff9acca36.mockapi.io/products?_limit=8");
    return res.data;
  }
);
export const getAllProduct = createAsyncThunk(
  "products/getAllProduct",
  async () => {
    const res = await axios.get("https://6266262cdbee37aff9acca36.mockapi.io/products");
    return res.data;
  }
);
export const getAllCategory = createAsyncThunk(
  "products/getAllCategory",
  async () => {
    const res = await axios.get("https://laptop-store-fakeapi-q49htehpo-nampro2002.vercel.app/category");
    return res.data;
  }
);
export const updateProductRating = createAsyncThunk(
  "products/updateProductRating",
  async ({ productId, rate }: { productId: string; rate: number }) => {
    const res = await axios.patch(
      `https://6266262cdbee37aff9acca36.mockapi.io/products/${productId}`,
      {
        rate,
      }
    );
    return res.data;
  }
);
export const random = createAsyncThunk(
  "products/random",
  async ({ productId, price }: { productId: string; price: number }) => {
    const res = await axios.patch(
      `https://6266262cdbee37aff9acca36.mockapi.io/products/${productId}`,
      {
        price,
      }
    );
    return res.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getTypicalProduct.fulfilled, (state, action) => {
        state.productCarousel = action.payload;
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.productList = action.payload;
      })
      .addCase(getAllCategory.fulfilled, (state, action) => {
        state.category = action.payload;
      })
      .addCase(random.fulfilled, (state, action) => {
        state.category = action.payload;
      })
      .addCase(updateProductRating.fulfilled, (state, action) => {
        state.productList.some((product) => {
          if (product.id === action.payload.id) {
            product.rate = action.payload.rate
            return true;
          }
          return false;
        });
      });
  },
});
const productReducer = productSlice.reducer;
const {} = productSlice.actions;
export default productReducer;
