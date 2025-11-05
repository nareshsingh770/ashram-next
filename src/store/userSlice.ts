import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import apiClient, { apiHelpers } from "@/lib/apiClient";
import { authAPI } from "@/services/api";

interface UserDetails {
  id?: string;
  name: string;
  email?: string;
  phone?: string;
  username?: string;
  [key: string]: any; // For any additional fields from backend
}

interface UserState {
  isAuthenticated: boolean;
  userDetails: UserDetails | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  isAuthenticated: false,
  userDetails: null,
  isLoading: true, // Start with loading true to check auth status
  error: null,
};

// Async thunks
export const checkAuthStatus = createAsyncThunk(
  "user/checkAuthStatus",
  async (_, { rejectWithValue }) => {
    try {
      const response = await authAPI.checkAuth();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Authentication failed"
      );
    }
  }
);

export const loginUserAsync = createAsyncThunk(
  "user/loginUser",
  async (
    credentials: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await authAPI.login(credentials);
      return response.data;
    } catch (error: any) {
      return error.response?.data?.message || "Login failed";
    }
  }
);

export const logoutUserAsync = createAsyncThunk(
  "user/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      await authAPI.logout();
      return;
    } catch (error: any) {
      // Even if logout fails on server, we should still clear local state
      console.warn("Logout request failed:", error);
      return;
    }
  }
);

export const registerUserAsync = createAsyncThunk(
  "user/registerUser",
  async (userData: userRegisterProps, { rejectWithValue }) => {
    try {
      const response = await authAPI.register(userData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Registration failed"
      );
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser(state, action: PayloadAction<UserDetails>) {
      state.isAuthenticated = true;
      state.userDetails = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    logoutUser(state) {
      state.isAuthenticated = false;
      state.userDetails = null;
      state.isLoading = false;
      state.error = null;
    },
    setAuthLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    updateUserDetails(state, action: PayloadAction<Partial<UserDetails>>) {
      if (state.userDetails) {
        state.userDetails = { ...state.userDetails, ...action.payload };
      }
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Check Auth Status
    builder
      .addCase(checkAuthStatus.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(checkAuthStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.success && action.payload.userDetails) {
          state.isAuthenticated = true;
          state.userDetails = action.payload.userDetails;
        } else {
          state.isAuthenticated = false;
          state.userDetails = null;
        }
      })
      .addCase(checkAuthStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.userDetails = null;
        state.error = action.payload as string;
      });

    // Login User
    builder
      .addCase(loginUserAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload, "payload in userSlice");
        if (action.payload.message && action.payload.userDetails) {
          state.isAuthenticated = true;
          state.userDetails = action.payload.userDetails;
        }
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    // Logout User
    builder
      .addCase(logoutUserAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUserAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.userDetails = null;
        state.error = null;
      })
      .addCase(logoutUserAsync.rejected, (state) => {
        state.isLoading = false;
        // Still logout locally even if server request fails
        state.isAuthenticated = false;
        state.userDetails = null;
      });

    // Register User
    builder
      .addCase(registerUserAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUserAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        // You might want to auto-login after registration
        // or just show success message
      })
      .addCase(registerUserAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const {
  loginUser,
  logoutUser,
  setAuthLoading,
  updateUserDetails,
  clearError,
} = userSlice.actions;
export default userSlice.reducer;
