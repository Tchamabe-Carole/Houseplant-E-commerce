import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      
      if (!existingItem) {
        // Add new item with quantity 1
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price
        });
      } else {
        // Increment existing item
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      }
      
      // Update cart totals
      state.totalQuantity++;
      state.totalAmount = calculateCartTotal(state.items);
    },
    
    increaseItemQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
        state.totalQuantity++;
        state.totalAmount = calculateCartTotal(state.items);
      }
    },
    
    decreaseItemQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem) {
        if (existingItem.quantity === 1) {
          // Remove item if quantity becomes 0
          state.items = state.items.filter(item => item.id !== id);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice = existingItem.price * existingItem.quantity;
        }
        
        state.totalQuantity--;
        state.totalAmount = calculateCartTotal(state.items);
      }
    },
    
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.items = state.items.filter(item => item.id !== id);
        state.totalAmount = calculateCartTotal(state.items);
      }
    }
  }
});

// Helper function to calculate cart total
const calculateCartTotal = (items) => {
  return items.reduce((total, item) => total + item.totalPrice, 0);
};

export const { addToCart, increaseItemQuantity, decreaseItemQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;