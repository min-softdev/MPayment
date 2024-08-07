"use client";
import { useEffect } from "react";

import { HeaderCom, SideBarCom } from "@components";
import { theme, user } from "@hooks";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  const { handleTheme } = theme.useTheme();
  const userData: any = user.useGetUser();

  useEffect(() => {
    const onHandleTheme = () => {
      let theme = localStorage.getItem("theme") || "light";
      handleTheme(theme);
    };

    onHandleTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return userData?.data?.data?.user ? (
    <div className="flex h-screen">
      <SideBarCom />
      <div className="flex-1 flex flex-col">
        <HeaderCom />
        {children}
      </div>
    </div>
  ) : (
    <div className="flex min-h-screen">{children}</div>
  );
};
