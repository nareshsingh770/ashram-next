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
  token?: string;
  success?: boolean;
}
