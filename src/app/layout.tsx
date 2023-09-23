"use client";
import "./globals.css";
import React from "react";
import Nav from "@/components/navbar";
import SearchBar from "@/components/searchbar";
import { redirect } from "next/navigation";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [show, setShow] = React.useState(false);
  return (
    <html lang="en">
      <head>
        <title>HMS HUB</title>
      </head>
      <body>
        <div id="addeventModal"></div>
        <div className="">
          <Nav sho={show} close={setShow} />
          <>
            {show ? (
              <XMarkIcon
                onClick={() => setShow(false)}
                className="fixed right-0 w-[30px] z-50 m-3 sm:hidden"
              />
            ) : (
              <Bars4Icon
                onClick={() => setShow(true)}
                className="fixed right-0 w-[30px] z-50 m-3 sm:hidden"
              />
            )}
          </>
        </div>
        <div className="bg-background min-h-[100vh]  sm:p-4 overflow-x-hidden sm:overflow-x-auto md:ml-72">
          <div className="sm:mx-4">
            <SearchBar />
          </div>
          <div className="mt-[20px] sm:mt-[80px] sm:mt-0 px-4 sm:px-4">{children}</div>
        </div>
      </body>
    </html>
  );
}
