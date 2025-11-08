import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { eventsAPI } from "@/services/api";
import { Event, EventState } from "@/types/event";

const initialState: EventState = {
  eventList: [],
  isLoading: false,
  error: null,
};

// Async thunks
export const getEventList = createAsyncThunk(
  "event/getEventList",
  async (_, { rejectWithValue }) => {
    try {
      const response = await eventsAPI.getEvents();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch events"
      );
    }
  }
);

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Get Event List
    builder
      .addCase(getEventList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getEventList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.eventList = action.payload.events;
      })
      .addCase(getEventList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError } = eventSlice.actions;
export default eventSlice.reducer;
