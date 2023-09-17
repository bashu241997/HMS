"use client";
import React, { useState } from "react";
import LeftMessagesBar from "@/components/messagebar/leftmessagesBar";
import { ArrowLeftCircleIcon} from "@heroicons/react/24/solid";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [Showat, setShowat] = useState(false);
  return (
    <div className="h-[85vh] max-h-[90vh] shadow-lg overflow-hidden rounded-lg sm:grid sm:grid-cols-12">
      <div className="hidden sm:block col-span-12 sm:col-span-3">
        <LeftMessagesBar />
      </div>
      <div className="hidden sm:block col-span-12 sm:col-span-9">
        {children}
      </div>
      <div className="sm:hidden">
        {Showat ? (
          <div className="">
            <div className="w-full text-center py-[15px] flex items-center justify-end font-bold" onClick={()=>setShowat(false)}><ArrowLeftCircleIcon className="w-[25px]" /> back</div>
            {children}</div>
        ) : (
          <div className="">
            <LeftMessagesBar onopen={setShowat} />
          </div>
        )}
      </div>
    </div>
  );
}
