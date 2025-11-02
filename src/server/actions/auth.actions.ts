import {
  loginUserService,
  registerUserService,
} from "@/server/services/auth.service";
import { generateUsername } from "@/utils/helper";
import { signupSchema, loginSchema } from "@/schema/userDetails";

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
      message: "Validation failed.",
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
  if (response.message) {
    return {
      zodErrors: null,
      apiErrors: null,
      message: response.message,
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

export async function userLogin(
  prevState: any,
  formData: FormData
): Promise<ActionResult> {
  try {
    // Validate fields
    console.log("formData", formData);
    const validatedFields = loginSchema.safeParse({
      identifier: formData.get("email"),
      password: formData.get("password"),
    });

    if (!validatedFields.success) {
      return {
        zodErrors: validatedFields.error.flatten().fieldErrors,
        apiErrors: null,
        success: false,
      };
    }

    const { identifier, password } = validatedFields.data;
    const response = await loginUserService({
      email: identifier,
      password,
    });
    if (!response) {
      return {
        apiErrors: null,
        zodErrors: null,
        message: "Server error. Please try again later.",
        success: false,
      };
    }

    if (response.error) {
      const errorMessage = response.error[0]?.message || "Invalid credentials";
      return {
        apiErrors: response.error,
        zodErrors: null,
        message: errorMessage,
        success: false,
      };
    }

    // set jwt cookie
    if (response && response.message && response.token) {
      return {
        zodErrors: null,
        apiErrors: null,
        message: response.message,
        token: response.token,
        success: true,
      };
    }

    return {
      zodErrors: null,
      apiErrors: null,
      message: "Login failed. Please try again.",
      success: false,
    };
  } catch (error: any) {
    return {
      apiErrors: null,
      zodErrors: null,
      message: error?.message,
      success: false,
    };
  }
}
