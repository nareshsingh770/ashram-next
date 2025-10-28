"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/store";
import { login, logout } from "@/store/userSlice";

const Test = () => {
  const user = useSelector((state: RootState) => state.user.value);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      {user ? <p>Hello, {user.name}</p> : <p>Please log in</p>}
      <button onClick={() => dispatch(login({ name: "Alice" }))}>Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Test;
