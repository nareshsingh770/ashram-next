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
        credentials: "include", // Allow cookies to be sent and received
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

export async function loginUserService(credentials: {
  email: string;
  password: string;
}) {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Allow cookies to be sent and received
        body: JSON.stringify(credentials),
      }
    );

    return result.json();
  } catch (error: any) {
    console.error("Error logging in user:", error.message);
    return null;
  }
}
