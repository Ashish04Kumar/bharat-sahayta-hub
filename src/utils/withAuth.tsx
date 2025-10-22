"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { handleError } from "./handle-error";

export function withAuth<P>(WrappedComponent: React.ComponentType<P>) {
  return function ProtectedComponent(props: P) {
    const router = useRouter();

    useEffect(() => {
      const token = Cookies.get("access_token");
      console.log("6ujytr", token);
      if (!token) {
        router.push("/login");
      }
      try {
        const decoded = jwtDecode(token);
        console.log("decoded", decoded);
      } catch (err) {
        handleError("Invalid token");
        // console.error("Invalid token", err);
        router.push("/login");
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };
}
