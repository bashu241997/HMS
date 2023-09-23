"use client";
import type { Metadata } from "next";
import { Settings } from "@/common/constant/nav";
import { redirect } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ProfileCard from "@/common/components/cards/profilecard";
interface menulinks {
  label?: string;
  link?: any;
  Icon?: any;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentPage = usePathname();
  return (
    <div className="grid sm:p-6 grid-cols-12 gap-4">
      <div className="px-2 sm:px-4 col-span-12 sm:col-span-3"><ProfileCard /></div>
      <div className="px-2 sm:px-4 col-span-12 sm:col-span-9">
        <div className="flex bg-white shadow-lg overflow-x-auto rounded-md p-2 mb-3">
          {Settings.map((e: menulinks, i) => {
            const Icon = e.Icon;
            return (
              <Link
                key={i}
                className={`text-[12px] text-primary border-b-[5px] font-bold p-2 duration-300 mx-2 capitalize flex justify-start ${
                  currentPage === e.link
                    ? "border-skyMain text-skyMain"
                    : "border-[#fff0]"
                }`}
                href={e.link}
              >
                <span className="pr-1">
                  <Icon className={"w-[20px]"} />
                </span>
                <span className=" min-w-[100px] max-w-[250px]">{e.label}</span>
              </Link>
            );
          })}
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
