import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import {
  loginUser,
  logoutUser,
  clearError,
  checkAuthStatus,
  loginUserAsync,
  logoutUserAsync,
  registerUserAsync,
} from "@/store/slices/userSlice";

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated, userDetails, isLoading, error } = useSelector(
    (state: RootState) => state.user
  );

  // Function to check authentication status on app load
  const checkAuth = () => {
    dispatch(checkAuthStatus());
  };

  // Function to logout user
  const logout = () => {
    dispatch(logoutUserAsync());
  };

  // Function to register user
  const register = async (userData: userRegisterProps) => {
    const result = await dispatch(registerUserAsync(userData));
    return result;
  };

  // Function to clear errors
  const clearAuthError = () => {
    dispatch(clearError());
  };

  // Function to manually set user (for backward compatibility)
  const setUser = (userDetails: any) => {
    dispatch(loginUser(userDetails));
  };

  return {
    isAuthenticated,
    userDetails,
    isLoading,
    error,
    logout,
    register,
    checkAuth,
    clearAuthError,
    setUser, // For backward compatibility
  };
};
