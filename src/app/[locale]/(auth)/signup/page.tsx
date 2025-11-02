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
  const [errorMessage, setErrorMessage] = useState<Record<
    string,
    string[]
  > | null>(null);

  useEffect(() => {
    console.log(state, "state");
    if (state?.message && !state.success && state?.zodErrors) {
      setErrorMessage(state.zodErrors);
    } else if (state?.success) {
      window.location.href = "/";
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
                    label="Name"
                    type="text"
                    name="name"
                    zodErrors={errorMessage?.name}
                  />
                  <InputFeild
                    label="Phone"
                    type="tel"
                    name="phone"
                    zodErrors={errorMessage?.phone}
                  />
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
                  <InputFeild
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    zodErrors={errorMessage?.confirmPassword}
                  />

                  <div className="relative mt-10">
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
