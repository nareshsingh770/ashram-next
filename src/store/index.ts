import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import postsReducer from "./slices/postsSlice";
import eventsReducer from "./slices/eventSlice";
import bookReducer from "./slices/bookSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
    events: eventsReducer,
    books: bookReducer,
    // Add more slices here
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
