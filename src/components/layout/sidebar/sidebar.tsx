"use client";
import { useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  BsGrid,
  BsWallet,
  BsArrowLeftRight,
  BsGear,
  BsArrowBarRight,
  BsChevronDown,
  BsChevronUp,
} from "react-icons/bs";

import { auth } from "@hooks";

export const navData: any = [
  {
    title: "section one",
    data: [
      {
        name: "Dashboard",
        icon: <BsGrid className="text-typo" />,
        path: "/",
      },
      {
        name: "System",
        icon: <BsWallet className="text-typo" />,
        path: "/service/wallet",
        data: [
          {
            name: "User",
            icon: <BsGear className="text-typo" />,
            path: "/user/list",
          },
          {
            name: "Merchant",
            icon: <BsGear className="text-typo" />,
            path: "/merchant/list",
          },
          {
            name: "Config",
            icon: <BsGear className="text-typo" />,
            path: "/config/list",
          },
        ],
      },
      {
        name: "Ecommerce",
        icon: <BsArrowLeftRight className="text-typo" />,
        count: 1,
        path: "/service/transactions",
        data: [
          {
            name: "Products",
            icon: <BsGear className="text-typo" />,
            path: "/product/list",
          },
        ],
      },
    ],
  },
  {
    title: "section two",
    data: [
      {
        name: "Settings",
        icon: <BsGear className="text-typo" />,
        path: "/setting/list",
      },
      {
        name: "Logout",
        icon: <BsArrowBarRight className="text-typo" />,
        path: "/logout",
        onPress: () => {
          console.log("logout");
        },
      },
    ],
  },
];

export const SideBarCom = () => {
  const pathName = usePathname();
  const router = useRouter();
  const signOut: any = auth.useSignOut();
  const { authReducer, dispatch } = auth.useAuth();

  const handleLogOut = async () => {
    signOut.mutate(null, {
      onSuccess: (data: any) => {
        if (data.error) {
          console.error(data.error);
          return;
        }
        document.cookie =
          "sb-auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        dispatch(authReducer.setAuth({ logInData: null }));
        router.replace("/auth/signin");
      },
      onError: (error: any) => {
        console.error("Sign-out error:", error);
      },
    });
  };

  const handleRouteChange = useCallback(
    (path: string) => {
      if (path === "/logout") {
        handleLogOut();
      } else {
        router.push(path);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router]
  );

  return (
    <div className="bg-sidebar h-screen overflow-y-auto w-1/6 hidden lg:block">
      <div
        onClick={() => handleRouteChange("/")}
        className="flex flex-row items-center gap-x-2 p-[20px] cursor-pointer"
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
        {navData.map((section: any, sectionIndex: number) => (
          <ul
            key={sectionIndex}
            className="border-b border-border mb-[25px] pb-[25px] last:border-b-0"
          >
            {section.data.map((item: any, itemIndex: number) => (
              <li
                key={itemIndex}
                className={`${
                  pathName === item.path ? "bg-active-gradient" : ""
                } hover:text-hover rounded-[5px]`}
              >
                {item.data ? (
                  <>
                    <input
                      type="checkbox"
                      id={`collapse-${itemIndex}`}
                      className="hidden peer"
                    />
                    <label
                      htmlFor={`collapse-${itemIndex}`}
                      className="flex items-center gap-x-2 cursor-pointer py-[10px] px-[20px]"
                    >
                      <div>{item.icon}</div>
                      <span className="text-typo label">{item.name}</span>
                      <div className="ml-auto">
                        <BsChevronDown className="peer-checked:hidden" />
                        <BsChevronUp className="hidden peer-checked:block" />
                      </div>
                    </label>
                    <ul className="pl-6 max-h-0 overflow-hidden transition-[max-height] duration-300 ease-in-out peer-checked:max-h-[1000px]">
                      {item.data.map((subItem: any, subItemIndex: number) => (
                        <li
                          key={subItemIndex}
                          className={`${
                            pathName === subItem.path
                              ? "bg-active-gradient"
                              : ""
                          } hover:text-hover rounded-[5px]`}
                        >
                          <Link
                            href={subItem.path || "#"}
                            className="flex items-center gap-x-2 py-[10px] px-[20px]"
                          >
                            <div>{subItem.icon}</div>
                            <span className="text-typo label">
                              {subItem.name}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <>
                    {item.onPress ? (
                      <div
                        onClick={() => handleRouteChange(item.path)}
                        className="flex items-center gap-x-2 cursor-pointer py-[10px] px-[20px]"
                      >
                        <div>{item.icon}</div>
                        <span className="text-typo label">{item.name}</span>
                      </div>
                    ) : (
                      <Link
                        href={item.path || "#"}
                        className="flex items-center gap-x-2 py-[10px] px-[20px]"
                      >
                        <div>{item.icon}</div>
                        <span className="text-typo label">{item.name}</span>
                      </Link>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        ))}
      </nav>
    </div>
  );
};
