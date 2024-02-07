import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0 },
  reducers: {
    addItemToCart(state, action) {
      const addedItem = action.payload;
      const existingItem = state.items.find((item) => item.id === addedItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: addedItem.id,
          price: addedItem.price,
          quantity: 1,
          totalPrice: addedItem.price,
          name: addedItem.name,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + addedItem.price;
      }
    },
    removeItemToCart(state, action) {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);
      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== itemId);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
