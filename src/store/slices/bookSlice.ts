import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { booksAPI } from "@/services/api";
import { Books } from "@/types/event";

const initialState: Books = {
  books: [],
  isLoading: false,
  error: null,
};

// export const getEventList = createAsyncThunk(
//   "event/getEventList",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await eventsAPI.getEvents();
//       return response.data;
//     } catch (error: any) {
//       return rejectWithValue(
//         error.response?.data?.message || "Failed to fetch events"
//       );
//     }
//   }
// );
export const uploadBook = createAsyncThunk(
  "book/uploadBook",
  async (bookData: FormData, { rejectWithValue }) => {
    try {
      const response = await booksAPI.createBook(bookData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch events"
      );
    }
  }
);
export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await booksAPI.getBooks();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch events"
      );
    }
  }
);

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Upload Book
    builder
      .addCase(uploadBook.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(uploadBook.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(uploadBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError } = bookSlice.actions;
export default bookSlice.reducer;
