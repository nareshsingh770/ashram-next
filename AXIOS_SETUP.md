# Axios & Redux Async Thunk Setup

This document outlines the implementation of Axios for API calls and Redux Toolkit's createAsyncThunk for handling asynchronous operations.

## 📁 File Structure

```
src/
├── lib/
│   └── apiClient.ts          # Axios configuration and helpers
├── services/
│   └── api.ts               # API endpoint definitions
├── store/
│   ├── index.ts             # Store configuration
│   ├── userSlice.ts         # User authentication slice with async thunks
│   └── postsSlice.ts        # Example posts slice with async thunks
├── hooks/
│   ├── useAuth.ts           # Authentication hook
│   └── usePosts.ts          # Posts management hook
└── components/
    └── examples/
        └── LoginWithAsyncThunk.tsx  # Example usage
```

## 🔧 Configuration

### 1. Axios Configuration (`lib/apiClient.ts`)

```typescript
import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
  withCredentials: true, // For cookie-based auth
  headers: {
    "Content-Type": "application/json",
  },
});
```

**Features:**

- Automatic base URL configuration
- Request/response interceptors for logging and error handling
- Cookie support for authentication
- Helper functions for common HTTP methods

### 2. API Services (`services/api.ts`)

Organized API endpoints by feature:

```typescript
export const authAPI = {
  login: (credentials) => apiHelpers.post("/auth/login", credentials),
  register: (userData) => apiHelpers.post("/auth/signup", userData),
  checkAuth: () => apiHelpers.get("/auth/me"),
  logout: () => apiHelpers.post("/auth/logout"),
};
```

## 🔄 Redux Async Thunks

### User Authentication Slice

```typescript
export const loginUserAsync = createAsyncThunk(
  "user/loginUser",
  async (
    credentials: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await apiClient.post("/auth/login", credentials);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);
```

### State Management

```typescript
interface UserState {
  isAuthenticated: boolean;
  userDetails: UserDetails | null;
  isLoading: boolean;
  error: string | null;
}
```

## 🎣 Custom Hooks

### useAuth Hook

```typescript
const {
  isAuthenticated,
  userDetails,
  isLoading,
  error,
  login,
  logout,
  register,
  checkAuth,
} = useAuth();
```

**Usage:**

```typescript
const handleLogin = async () => {
  const result = await login({ email, password });
  if (result.type.endsWith("/fulfilled")) {
    // Login successful
  }
};
```

### usePosts Hook (Example)

```typescript
const {
  posts,
  currentPost,
  isLoading,
  error,
  loadPosts,
  loadPost,
  addPost,
  editPost,
  removePost,
} = usePosts();
```

## 📝 Usage Examples

### 1. Login Component

```typescript
"use client";
import { useAuth } from "@/hooks/useAuth";

const LoginComponent = () => {
  const { login, isLoading, error } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await login({ email, password });

    if (result.type.endsWith("/fulfilled")) {
      console.log("Login successful!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      {/* Form fields */}
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};
```

### 2. Posts List Component

```typescript
"use client";
import { useEffect } from "react";
import { usePosts } from "@/hooks/usePosts";

const PostsList = () => {
  const { posts, isLoading, loadPosts } = usePosts();

  useEffect(() => {
    loadPosts({ page: 1, limit: 10 });
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};
```

### 3. File Upload Example

```typescript
import { uploadAPI } from "@/services/api";

const handleFileUpload = async (file: File) => {
  try {
    const response = await uploadAPI.uploadFile(file, (progress) => {
      console.log(\`Upload progress: \${progress}%\`);
    });
    console.log("File uploaded:", response.data);
  } catch (error) {
    console.error("Upload failed:", error);
  }
};
```

## 🔒 Authentication Flow

1. **App Initialization**: `AuthProvider` checks authentication status
2. **Login**: User submits credentials → `loginUserAsync` thunk → Update state
3. **Token Storage**: Backend sets HTTP-only cookies automatically
4. **API Calls**: Axios automatically includes cookies in requests
5. **Logout**: Clear local state and call logout endpoint

## 📊 State Structure

### User State

```typescript
{
  isAuthenticated: false,
  userDetails: null,
  isLoading: true,
  error: null
}
```

### Posts State (Example)

```typescript
{
  posts: [],
  currentPost: null,
  isLoading: false,
  error: null,
  pagination: {
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0
  }
}
```

## 🚀 Benefits

1. **Centralized API Configuration**: Single source for all HTTP settings
2. **Automatic Error Handling**: Interceptors handle common error scenarios
3. **Type Safety**: Full TypeScript support for API calls and state
4. **Loading States**: Built-in loading states for better UX
5. **Error Management**: Consistent error handling across the app
6. **Cookie Support**: Automatic cookie handling for authentication
7. **Reusable Hooks**: Easy-to-use hooks for common operations

## 🔧 Environment Variables

Make sure to set in your `.env.local`:

```
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api
```

## 🧪 Testing

Each async thunk can be tested individually:

```typescript
import { loginUserAsync } from "@/store/userSlice";

test("loginUserAsync success", async () => {
  const credentials = { email: "test@test.com", password: "password" };
  const result = await store.dispatch(loginUserAsync(credentials));

  expect(result.type).toBe("user/loginUser/fulfilled");
});
```

This setup provides a robust foundation for handling API calls and state management in your Next.js application!
