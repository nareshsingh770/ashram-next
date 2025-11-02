"use client";
import Button from "@/components/atoms/Button";
import InputFeild from "@/components/atoms/InputFeild";
import { userLogin } from "@/server/actions/auth.actions";
import React, { useActionState, useEffect, useState } from "react";

const initialState: ActionResult = {
  zodErrors: {},
  apiErrors: {},
  message: "",
  token: "",
  success: false,
};

const Login = () => {
  const [state, formAction] = useActionState(userLogin, initialState);
  const [errorMessage, setErrorMessage] = useState<Record<
    string,
    string[]
  > | null>(null);

  useEffect(() => {
    if (state?.message && !state.success && state?.zodErrors) {
      setErrorMessage(state.zodErrors);
    } else if (state.success && state.token) {
      //window.location.href = "/";
    }
  }, [state]);
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
