"use client";
import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { checkAuth, isLoading } = useAuth();

  useEffect(() => {
    // Check authentication status when the app loads
    checkAuth();
  }, []);

  // Optional: Show loading spinner while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthProvider;
