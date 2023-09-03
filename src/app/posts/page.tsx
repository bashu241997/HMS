"use client"
import { blogs } from "@/common/constant/blog";
import React from "react";
const page = () => {
  return (
    <div className="p-4">
      <h3 className="text-2xl font-bold capitalize">Latest Blogs</h3>
      <p className="py-3 text-sm text-primary">
        All the content is Updated and belong to harvard 
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {blogs.map((e: any,i:number) => {
          return (
            <a
            key={i}
              href={e?.link}
              target="_blank"
              className="max-w-[320px] my-4 rounded overflow-hidden shadow-lg"
            >
              <img
                className="w-full h-52"
                src={e?.pic}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{e?.title}</div>
                <p className="text-gray-400 text-[12px] font-medium">
                  {e?.date}
                </p>
                <p className="text-gray-700 pt-4 text-[14px]">{e?.about}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                {e?.roles?.map((_e: any) => (
                  <span className="inline-block bg-primarygrey rounded-full px-4 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #{_e}
                  </span>
                ))}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default page;
