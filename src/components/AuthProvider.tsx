"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { usePathname, useRouter } from "next/navigation";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { checkAuth, isLoading } = useAuth();
  const { userDetails, isAuthenticated } = useSelector(
    (state: RootState) => state.user
  );
  const pathname = usePathname();
  const router = useRouter();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    // Check authentication status when the app loads
    const initAuth = () => {
      checkAuth();
      setAuthChecked(true);
    };
    initAuth();
  }, []);

  useEffect(() => {
    // Only perform authorization checks after auth status is determined
    if (authChecked && !isLoading) {
      // Check admin access
      if (pathname.startsWith("/admin")) {
        // If user is not authenticated, redirect to admin login
        if (!isAuthenticated) {
          if (pathname !== "/admin") {
            router.replace("/admin");
          }
          return;
        }

        // If user is authenticated but not admin, redirect to 404
        if (userDetails?.role !== "admin") {
          router.replace("/404");
          return;
        }
      }
    }
  }, [userDetails, pathname, authChecked, isLoading, isAuthenticated, router]);

  // Show loading spinner while checking auth or during redirect
  if (isLoading || !authChecked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Additional check: if we're on an admin route and user is not admin, show loading
  // while redirect is happening
  if (authChecked && !isLoading && pathname.startsWith("/admin")) {
    if (!isAuthenticated && pathname !== "/admin") {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Redirecting to login...</p>
          </div>
        </div>
      );
    }

    if (isAuthenticated && userDetails?.role !== "admin") {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Access denied. Redirecting...</p>
          </div>
        </div>
      );
    }
  }

  return <>{children}</>;
};

export default AuthProvider;
