import " /styles/globals.css";

import { Noto_Kufi_Arabic } from "next/font/google";
import { type Metadata } from "next";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";

import { TRPCReactProvider } from " /trpc/react";
import { Navbar } from " /components/Navbar";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { Toaster } from " /components/ui/sonner";


export const metadata: Metadata = {
  title: "TASTIFY App",
  description: "tastify products display site",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const fontArabic = Noto_Kufi_Arabic({ subsets: ['arabic'] }) 

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fontArabic.className}`}>
      <body>
        <NextSSRPlugin
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        <TRPCReactProvider>
          <main className="flex h-full flex-col gap-4">
            <div>
          <Navbar />
            </div>
            <div className="mt-[56px]">
          {children}
            </div>
          <Toaster richColors theme="light" closeButton />
          </main>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
