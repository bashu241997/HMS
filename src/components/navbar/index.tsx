"use client";
import MenuLinks from "@/common/components/Link";
import { menu } from "@/common/constant/nav";
import React from "react";
import Image from "next/image";

const Index = ({sho,close}:any) => {
  return (
    <>
      <aside
        id="default-sidebar"
        className={`fixed bg-[#fff] top-0 left-0 z-10 w-72 h-screen border-r-1 transition-transform ${sho? 'translate-x-0' : 'md:translate-x-0'} -translate-x-full `}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
          <div className="py-[20px] flex uppercease items-senter justify-center">
            <Image
              src="/logo.png"
              width={45}
              height={45}
              alt="Picture of logo"
            /><span className="font-extrabold px-3 text-[26px]">HMS +</span>
          </div>
          <ul className="space-y-2 cusrsor-pointer font-medium">
            {menu.map((_nav, i) => (
              <MenuLinks key={i} {..._nav} onclose={close}/>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Index;
