import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Create Thunks

// Create Inventory
export const createStock = createAsyncThunk(
  'inventory/createStock',
  async (stockData, { rejectWithValue, getState }) => {
    try {
      const {
        admin: { adminUserInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${adminUserInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `https://pizza-server-three.vercel.app/api/stocks`,
        {
          type: stockData.type,
          item: stockData.item,
          price: stockData.price,
          quantity: stockData.quantity,
          threshold: stockData.threshold,
        },
        config
      );

      return data;
    } catch (error) {
      return rejectWithValue({
        status: error.response && error.response.status,
        message:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  }
);

// Get All Inventory
export const listInventory = createAsyncThunk(
  'inventory/listStocks',
  async (_, { rejectWithValue, getState }) => {
    try {
      const {
        user: { userInfo },
        admin: { adminUserInfo },
      } = getState();

      let config;

      if (userInfo) {
        config = {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        };
      }

      if (adminUserInfo) {
        config = {
          headers: {
            Authorization: `Bearer ${adminUserInfo.token}`,
          },
        };
      }

      const { data } = await axios.get(
        `https://pizza-server-three.vercel.app/api/stocks`,
        config
      );

      return data;
    } catch (error) {
      return rejectWithValue({
        status: error.response && error.response.status,
        message:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  }
);

// Get Stock By Id
export const getStockById = createAsyncThunk(
  'inventory/getStockById',
  async (id, { rejectWithValue, getState }) => {
    try {
      const {
        user: { userInfo },
        admin: { adminUserInfo },
      } = getState();

      let config;

      if (userInfo) {
        config = {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        };
      }

      if (adminUserInfo) {
        config = {
          headers: {
            Authorization: `Bearer ${adminUserInfo.token}`,
          },
        };
      }

      const { data } = await axios.get(
        `https://pizza-server-three.vercel.app/api/stocks/${id}`,
        config
      );

      return data;
    } catch (error) {
      return rejectWithValue({
        status: error.response && error.response.status,
        message:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  }
);

// Update Stock By Id
export const updateStockById = createAsyncThunk(
  'inventory/updateStockById',
  async (id, { rejectWithValue, getState }) => {
    try {
      const {
        admin: { adminUserInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${adminUserInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `https://pizza-server-three.vercel.app/api/stocks/${id}`,
        config
      );

      return data;
    } catch (error) {
      return rejectWithValue({
        status: error.response && error.response.status,
        message:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  }
);

// Delete Stock By Id
export const deleteStockById = createAsyncThunk(
  'inventory/deleteStockById',
  async (id, { rejectWithValue, getState }) => {
    try {
      const {
        admin: { adminUserInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${adminUserInfo.token}`,
        },
      };

      const { data } = await axios.delete(
        `https://pizza-server-three.vercel.app/api/stocks/${id}`,
        config
      );

      return data;
    } catch (error) {
      return rejectWithValue({
        status: error.response && error.response.status,
        message:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  }
);
