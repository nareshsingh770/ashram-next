import apiClient, { apiHelpers } from "@/lib/apiClient";

// Auth API endpoints
export const authAPI = {
  // Login user
  login: (credentials: { email: string; password: string }) =>
    apiHelpers.post("/auth/login", credentials),

  // Register user
  register: (userData: userRegisterProps) =>
    apiHelpers.post("/auth/signup", userData),

  // Check authentication status
  checkAuth: () => apiHelpers.get("/auth/me"),

  // Logout user
  logout: () => apiHelpers.post("/auth/logout"),

  // Refresh token (if you implement refresh tokens)
  refreshToken: () => apiHelpers.post("/auth/refresh"),
};

// User API endpoints
export const userAPI = {
  // Get user profile
  getProfile: (userId: string) => apiHelpers.get(`/users/${userId}`),

  // Update user profile
  updateProfile: (userId: string, data: any) =>
    apiHelpers.patch(`/users/${userId}`, data),

  // Delete user account
  deleteAccount: (userId: string) => apiHelpers.delete(`/users/${userId}`),
};

// Example: Other API endpoints you might have
export const postsAPI = {
  // Get all posts
  getPosts: (params?: { page?: number; limit?: number }) =>
    apiHelpers.get("/posts", { params }),

  // Get single post
  getPost: (postId: string) => apiHelpers.get(`/posts/${postId}`),

  // Create new post
  createPost: (data: any) => apiHelpers.post("/posts", data),

  // Update post
  updatePost: (postId: string, data: any) =>
    apiHelpers.patch(`/posts/${postId}`, data),

  // Delete post
  deletePost: (postId: string) => apiHelpers.delete(`/posts/${postId}`),
};

// Event API endpoints
export const eventsAPI = {
  // Get all events
  getEvents: () => apiHelpers.get("/events"),

  // Get single event
  getEvent: (eventId: string) => apiHelpers.get(`/events/${eventId}`),

  // Create new event
  createEvent: (data: any) => {
    // Check if data is FormData (has image)
    if (data instanceof FormData) {
      return apiClient.post("/events", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }
    // Otherwise send as JSON
    return apiHelpers.post("/events", data);
  },

  // Update event
  updateEvent: (eventId: string, data: any) => {
    // Check if data is FormData (has image)
    if (data instanceof FormData) {
      return apiClient.patch(`/events/${eventId}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }
    // Otherwise send as JSON
    return apiHelpers.patch(`/events/${eventId}`, data);
  },

  // Delete event
  deleteEvent: (eventId: string) => apiHelpers.delete(`/events/${eventId}`),
};

// Example: File upload API
export const uploadAPI = {
  // Upload single file
  uploadFile: (file: File, onProgress?: (progress: number) => void) => {
    const formData = new FormData();
    formData.append("file", file);

    return apiClient.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (progressEvent) => {
        if (onProgress && progressEvent.total) {
          const progress = (progressEvent.loaded / progressEvent.total) * 100;
          onProgress(progress);
        }
      },
    });
  },

  // Upload multiple files
  uploadFiles: (files: File[]) => {
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`files[${index}]`, file);
    });

    return apiClient.post("/upload/multiple", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
