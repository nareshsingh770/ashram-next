import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import postsReducer from "./slices/postsSlice";
import eventsReducer from "./slices/eventSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
    events: eventsReducer,
    // Add more slices here
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
