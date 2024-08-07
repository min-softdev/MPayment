"use client";
import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Input } from "antd";
import { BsBell } from "react-icons/bs";
import { AiOutlineMail, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

import { navData } from "../sidebar";

export const HeaderCom = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathName = usePathname();
  const router = useRouter();
  // const { handleTheme, theme } = useHandleTheme();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleRouteChange = useCallback(
    (path: string) => {
      router.push(path);
      setIsDrawerOpen(false);
    },
    [router]
  );

  return (
    <header className="z-10 px-[15px] lg:px-[28px] pt-[15px] lg:pt-[24.5px] pb-[15px]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-3">
          <div
            onClick={toggleDrawer}
            className="block lg:hidden cursor-pointer"
          >
            <AiOutlineMenu className="text-typo font-bold text-[18px]" />
          </div>
          {pathName === "/" && (
            <span className="text-typo text-xl text-gray-800">Dashboard</span>
          )}
        </div>

        <div className="hidden lg:block">
          <div className="flex items-center gap-x-4">
            <div className="min-w-[269px]">
              <Input.Search placeholder="Search ..." />
            </div>
            <div className="flex items-center justify-between bg-primary rounded-[8px] px-[20px] py-1 gap-x-[77px] pl-[50px] relative">
              <Link href="/user/1">
                <span className="text-typo text-[14px]">Hello, Reggie</span>
              </Link>
              <div className="flex items-center gap-x-3">
                <Link
                  href="/notification/list"
                  className="cursor-pointer transition-transform duration-300 hover:-translate-y-[2px]"
                >
                  <AiOutlineMail className="text-typo text-[18px]" />
                </Link>
                <Link
                  href="/notification/list"
                  className="cursor-pointer transition-transform duration-300 hover:-translate-y-[2px] relative"
                >
                  <div className="flex items-start justify-center bg-[#9699F3] min-w-[18px] h-[18px] rounded-[18px] absolute top-[-12px] left-[7px]">
                    <span className="text-white text-[12px] text-center">
                      5
                    </span>
                  </div>
                  <BsBell className="text-typo text-[18px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="block lg:hidden">
          <div className="flex flex-row items-center justify-end gap-x-3">
            <Link href="/account/profile" className="cursor-pointer">
              <div className="w-[30px] h-[30px] rounded-[30px] overflow-hidden"></div>
            </Link>
            <Link
              href="/system/mails"
              className="cursor-pointer transition-transform duration-300 hover:-translate-y-[2px]"
            >
              <AiOutlineMail className="text-typo text-[18px]" />
            </Link>
            <Link
              href="/system/notifications"
              className="cursor-pointer transition-transform duration-300 hover:-translate-y-[2px] relative"
            >
              <div className="flex items-start justify-center bg-[#9699F3] min-w-[18px] h-[18px] rounded-[18px] absolute top-[-12px] left-[7px]">
                <span className="text-white text-[12px] text-center">5</span>
              </div>
              <BsBell className="text-typo text-[18px]" />
            </Link>
          </div>
        </div>

        <div
          className={`mobile-drawer-container fixed inset-0 bg-black bg-opacity-50 ${
            isDrawerOpen
              ? "transition-opacity duration-[.5s] ease-in-out opacity-100 visible z-50"
              : "opacity-0 invisible"
          } block lg:hidden`}
          onClick={toggleDrawer}
        >
          <div
            className={`mobile-drawer bg-primary h-full w-3/4 shadow-md overflow-y-auto ${
              isDrawerOpen
                ? "transition-transform duration-[.5s] ease-in-out translate-x-0"
                : "-translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              onClick={toggleDrawer}
              className="flex justify-end p-[13px] bg-primary cursor-pointer"
            >
              <AiOutlineClose className="text-[22px] text-typo" />
            </div>
            <div
              onClick={() => handleRouteChange("/")}
              className="flex flex-row items-center gap-x-2 p-[20px] pt-0 cursor-pointer"
            >
              <div className="w-[47px] h-[47px] rounded-[47px] overflow-hidden">
                <Image
                  src={require("../../../../public/googlewallet.png")}
                  className="w-full h-[47px] object-cover"
                  width={47}
                  height={47}
                  alt="Avatar"
                  priority
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
              <h1 className="text-typo font-bold text-lg">Wallet</h1>
            </div>
            <nav>
              {navData.map((item: any, index: number) => {
                return (
                  <ul
                    key={index}
                    className="border-b border-border mb-[25px] pb-[25px] last:border-b-0"
                  >
                    {item.data.map((item: any, index: number) => {
                      return (
                        <li
                          key={index}
                          className={`${
                            pathName === item.path ? "bg-active-gradient" : ""
                          }`}
                          onClick={toggleDrawer}
                        >
                          {item.path === "/logout" ? (
                            <div className="flex items-center gap-x-2 cursor-pointer py-[10px] px-[20px]">
                              <div>{item.icon}</div>
                              <span className="text-typo">{item.name}</span>
                            </div>
                          ) : (
                            <Link
                              href={item.path}
                              className="flex items-center gap-x-2 py-[10px] px-[20px]"
                            >
                              <div>{item.icon}</div>
                              <div className="flex w-full items-center justify-between">
                                <div className="flex">
                                  <span className="text-typo">{item.name}</span>
                                </div>
                                {item.count && (
                                  <div className="flex items-start justify-center bg-[#9699F3] min-w-[18px] h-[18px] rounded-[18px]">
                                    <span className="text-white text-[12px] text-center">
                                      {item.count}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </Link>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                );
              })}
            </nav>
            {/* <div className="absolute bottom-0 z-10 bg-primary w-full">
              <div
                className="cursor-pointer py-[20px] px-[20px] pl-[45px] relative"
                onClick={() => handleTheme(theme === "dark" ? "light" : "dark")}
              >
                <MdOutlineDarkMode
                  className={`text-typo text-[18px] transition-transform duration-500 ease-in-out absolute top-[22px] left-[20px] ${
                    theme === "dark"
                      ? "transform rotate-0 opacity-100"
                      : "opacity-0 rotate-90"
                  }`}
                />
                <MdOutlineLightMode
                  className={`text-typo text-[18px] transition-transform duration-500 ease-in-out absolute top-[22px] left-[20px] ${
                    theme === "light"
                      ? "transform rotate-90 opacity-100"
                      : "opacity-0"
                  }`}
                />
                <span className="text-typo">
                  Switch to {theme === "dark" ? "light" : "dark"}
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};
