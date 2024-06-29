"use client";
import { saveAndGetCurrentUser } from "@/actions/users";
import usersGlobalStore from "@/store/users-store";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Spin, message } from "antd";

function CustomLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname.includes("/sign-in") || pathname.includes("/sign-up")) {
    return <>{children}</>;
  }

  const { setLoggedInUserData, loggedInUserData }: any = usersGlobalStore();
  const [loading, setLoading] = useState(false);
  const getLoggedInUser = async () => {
    try {
      setLoading(true);
      const response: any = await saveAndGetCurrentUser();
      if (response.success) {
        setLoggedInUserData(response.data);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      message.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLoggedInUser();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen justify-center items-center global-spinner">
        <Spin />
      </div>
    );
  }

  if (!loggedInUserData) return null;

  return <div>{children}</div>;
}

export default CustomLayout;
