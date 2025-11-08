type ActionState = {
  zodErrors: Record<string, string[]> | null;
  apiErrors: Record<string, string[]> | null;
  message?: string;
  success?: boolean;
};

interface ActionResult {
  zodErrors: Record<string, string[]> | null;
  apiErrors: Record<string, string[]> | null;
  message?: string;
  userDetails?: {
    id: string;
    email: string;
    name: string;
    role: "user" | "admin";
    username: string;
  };
  success?: boolean;
}

interface userRegisterProps {
  name: string;
  username: string;
  email: string;
  phone: string;
  password: string;
}

interface EventState {
  eventList: any[] | null;
  isLoading: boolean;
  error: string | null;
}
