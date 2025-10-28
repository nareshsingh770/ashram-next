interface userRegisterProps {
  name: string;
  username: string;
  email: string;
  phone: string;
  password: string;
}
export async function registerUserService(userData: userRegisterProps) {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...userData,
        }),
      }
    );

    return result.json();
  } catch (error: any) {
    console.error("Error registering user:", error.message);
    return null;
  }
}
