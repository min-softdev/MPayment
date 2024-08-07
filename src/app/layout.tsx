import type { Metadata } from "next";
import { Jost } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import { Providers } from "./provider";
import "./globals.css";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MPayment",
  description: "Generated by LEGACYFA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={jost.className}>
        <AntdRegistry>
          <Providers>
            <main className="flex-1 overflow-y-auto p-4 px-4 lg:px-7 no-scrollbar">
              {children}
            </main>
          </Providers>
        </AntdRegistry>
      </body>
    </html>
  );
}
