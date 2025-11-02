"use client";
import Button from "@/components/atoms/Button";
import InputFeild from "@/components/atoms/InputFeild";
import { userSignup } from "@/server/actions/auth.actions";
import React, { useActionState, useEffect, useState } from "react";

const initialState: ActionState = {
  zodErrors: {},
  apiErrors: {},
  message: "",
  success: false,
};

const Signup = () => {
  const [state, formAction] = useActionState(userSignup, initialState);
  const [_errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (state?.message && !state.success) {
      setErrorMessage(state.message);
    } else if (state?.success) {
      window.location.href = "/";
    }
  }, [state?.message, state?.success]);

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
                  <InputFeild label="Name" type="text" name="name" />
                  <InputFeild label="Phone" type="tel" name="phone" />
                  <InputFeild label="Email" type="email" name="email" />
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <InputFeild
                      label="Password"
                      type="password"
                      name="password"
                    />
                    <InputFeild
                      label="Confirm Password"
                      type="password"
                      name="confirmPassword"
                    />
                  </div>

                  <div className="relative">
                    <Button
                      type="submit"
                      classnames={"w-full"}
                      text={"Sign Up"}
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

export default Signup;
