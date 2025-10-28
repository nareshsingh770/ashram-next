import { registerUserService } from "@/server/services/auth.service";
import { generateUsername } from "@/utils/helper";
import { signupSchema } from "@/schema/userDetails";

export async function userSignup(
  prevState: any,
  formData: FormData
): Promise<ActionResult> {
  console.log("formData", formData);
  // validate fields
  const validatedFields = signupSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!validatedFields.success) {
    return {
      zodErrors: validatedFields.error.flatten().fieldErrors,
      apiErrors: null,
      success: false,
    };
  }

  const username = generateUsername(validatedFields.data.name);

  const response = await registerUserService({
    ...validatedFields.data,
    username,
  });

  if (!response) {
    return {
      apiErrors: null,
      zodErrors: null,
      message: "Oh! Something went wrong please try again.",
      success: false,
    };
  }

  if (response.error) {
    return {
      apiErrors: response.error,
      zodErrors: null,
      message: "Failed to Register.",
      success: false,
    };
  }

  // set jwt cookie and redirect on success
  if (response && response.login && response.login.jwt) {
    return {
      zodErrors: null,
      apiErrors: null,
      message: "Registration successful",
      success: true,
    };
  }

  return {
    zodErrors: null,
    apiErrors: null,
    message: "Registration failed. Please try again.",
    success: false,
  };
}

// export async function login(
//   prevState: any,
//   formData: FormData
// ): Promise<ActionResult> {
//   try {
//     // Validate fields
//     const validatedFields = loginSchema.safeParse({
//       identifier: formData.get("email"),
//       password: formData.get("password"),
//     });

//     if (!validatedFields.success) {
//       return {
//         zodErrors: validatedFields.error.flatten().fieldErrors,
//         strapiErrors: null,
//         message: "Validation failed",
//         success: false,
//       };
//     }

//     const { identifier, password } = validatedFields.data;
//     const response = await loginUserService({
//       identifier,
//       password,
//     });
//     if (!response) {
//       return {
//         strapiErrors: null,
//         zodErrors: null,
//         message: "Server error. Please try again later.",
//         success: false,
//       };
//     }

//     if (response.error) {
//       const errorMessage = response.error[0]?.message || "Invalid credentials";
//       return {
//         strapiErrors: response.error,
//         zodErrors: null,
//         message: errorMessage,
//         success: false,
//       };
//     }

//     // set jwt cookie
//     if (response && response.login && response.login.jwt) {
//       cookies().set("jwt", response.login.jwt, cookieConfig);
//       return {
//         zodErrors: null,
//         strapiErrors: null,
//         message: "Login successful",
//         success: true,
//       };
//     }

//     return {
//       zodErrors: null,
//       strapiErrors: null,
//       message: "Login failed. Please try again.",
//       success: false,
//     };
//   } catch (error: any) {
//     console.error("Login error:", error?.graphQLErrors);
//     return {
//       strapiErrors: null,
//       zodErrors: null,
//       message: error?.graphQLErrors[0].message,
//       success: false,
//     };
//   }
// }
