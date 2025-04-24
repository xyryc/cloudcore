import { OrderPayload } from "@/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const placeOrder = createAsyncThunk(
  "order/placeOrder",
  async (orderData: OrderPayload) => {
    const response = await fetch(
      "https://admin.refabry.com/api/public/order/create",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      }
    );
    return response.json();
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: {
    loading: false,
    success: false,
    error: null as null | string,
  },
  reducers: {
    resetOrderState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(placeOrder.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(placeOrder.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const { resetOrderState } = orderSlice.actions;
export default orderSlice.reducer;
