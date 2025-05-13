import { createSlice } from '@reduxjs/toolkit';
import plantData from '../data/plantData';

const initialState = {
  plants: plantData
};

export const plantsSlice = createSlice({
  name: 'plants',
  initialState,
  reducers: {}
});

export default plantsSlice.reducer;