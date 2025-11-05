import apiClient from "@/lib/apiClient";
import { authAPI } from "@/services/api";

export async function registerUserService(userData: userRegisterProps) {
  try {
    const response = await authAPI.register(userData);
    return response;
  } catch (error: any) {
    console.error("Error registering user:", error.message);
    return error.response.data;
  }
}

export async function loginUserService(credentials: {
  email: string;
  password: string;
}) {
  try {
    const response = await authAPI.login(credentials);
    return response.data;
  } catch (error: any) {
    console.error("Error logging in user:", error.message);
    return error.response.data;
  }
}
