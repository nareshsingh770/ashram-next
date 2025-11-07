"use client";
import Button from "@/components/atoms/Button";
import InputFeild from "@/components/atoms/InputFeild";
import { userSignup } from "@/server/actions/auth.actions";
import { useRouter } from "next/navigation";
import React, { useActionState, useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const initialState: ActionState = {
  zodErrors: {},
  apiErrors: {},
  message: "",
  success: false,
};

const Signup = () => {
  const [state, formAction] = useActionState(userSignup, initialState);
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<Record<
    string,
    string[]
  > | null>(null);
  const t = useTranslations("signup");

  useEffect(() => {
    console.log(state, "state");
    if (state?.zodErrors) {
      setErrorMessage(state.zodErrors);
    } else if (state?.apiErrors) {
      alert(state.apiErrors);
    } else if (state?.message) {
      router.push("/login");
    }
  }, [state]);

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-linear-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">{t("signup")}</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 min-w-[300px]">
                <form action={formAction}>
                  <InputFeild
                    label={t("name")}
                    type="text"
                    name="name"
                    zodErrors={errorMessage?.name}
                  />
                  <InputFeild
                    label={t("phone")}
                    type="tel"
                    name="phone"
                    zodErrors={errorMessage?.phone}
                  />
                  <InputFeild
                    label={t("email")}
                    type="email"
                    name="email"
                    zodErrors={errorMessage?.email}
                  />
                  <InputFeild
                    label={t("password")}
                    type="password"
                    name="password"
                    zodErrors={errorMessage?.password}
                  />
                  <InputFeild
                    label={t("confirmPassword")}
                    type="password"
                    name="confirmPassword"
                    zodErrors={errorMessage?.confirmPassword}
                  />

                  <div className="relative mt-10">
                    <Button
                      type="submit"
                      classnames={"w-full"}
                      text={t("signup")}
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
