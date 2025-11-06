"use client";
import Button from "@/components/atoms/Button";
import InputFeild from "@/components/atoms/InputFeild";
import { userLogin } from "@/server/actions/auth.actions";
import { useAuth } from "@/hooks/useAuth";
import React, { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/store/userSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";

const initialState: ActionResult = {
  zodErrors: {},
  apiErrors: {},
  message: "",
  userDetails: {
    id: "",
    email: "",
    name: "",
    username: "",
  },
  success: false,
};

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [state, formAction] = useActionState(userLogin, initialState);
  const [errorMessage, setErrorMessage] = useState<Record<
    string,
    string[]
  > | null>(null);
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (state?.zodErrors) {
      setErrorMessage(state.zodErrors);
    } else if (state?.apiErrors) {
      alert(state.apiErrors);
    } else if (state?.message && state?.userDetails) {
      dispatch(loginUser(state.userDetails));
      router.push("/"); // Redirect to home page
    }
  }, [state, router]);

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-linear-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Login</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 min-w-[300px]">
                {state?.message && (
                  <div
                    className={`p-3 rounded ${
                      state.success
                        ? "bg-green-100 border border-green-400 text-green-700"
                        : "bg-red-100 border border-red-400 text-red-700"
                    }`}
                  >
                    {state.message}
                  </div>
                )}

                <form action={formAction}>
                  <InputFeild
                    label="Email"
                    type="email"
                    name="email"
                    zodErrors={errorMessage?.email}
                  />
                  <InputFeild
                    label="Password"
                    type="password"
                    name="password"
                    zodErrors={errorMessage?.password}
                  />

                  <div className="relative">
                    <Button
                      type="submit"
                      classnames={"w-full"}
                      text={"Login"}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
