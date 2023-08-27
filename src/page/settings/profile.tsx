"use client";
import { profile } from "@/common/constant/profile";
import React from "react";

const Profile = () => {
  const changeval = () => {};
  return (
    <div className="my-[15px] text-primary min-h-[70vh] shadow-xl p-3 rounded-lg bg-white">
      <div className="flex flex-col sm:flex-row items-start justify-start">
        <div>
          <div className="flex flex-col sm:flex-row  px-4 py-2 items-center">
            <label className="font-bold w-full text-left text-lg sm:w-[150px] capitalize">
              username :{" "}
            </label>
            <input
              className="border-b-[1px] px-4 py-2  outline-none capitalize"
              value={profile.username}
              onChange={changeval}
            />
          </div>
          <div className="flex flex-col sm:flex-row  px-4 py-2 items-center">
            <label className="font-bold w-full text-left text-lg sm:w-[150px] capitalize">
              full name :{" "}
            </label>
            <input
              className="border-b-[1px] px-4 py-2  outline-none capitalize"
              value={profile.profile.name}
              onChange={changeval}
            />
          </div>
          <div className="flex flex-col sm:flex-row  px-4 py-2 items-center">
            <label className="font-bold w-full text-left text-lg sm:w-[150px] capitalize">
              date of birth :{" "}
            </label>
            <input
              className="border-b-[1px] px-4 py-2  outline-none capitalize"
              value={profile.profile.dob}
              onChange={changeval}
            />
          </div>
          <div className="flex flex-col sm:flex-row  px-4 py-2 items-center">
            <label className="font-bold w-full text-left text-lg sm:w-[150px] capitalize">
              email :{" "}
            </label>
            <input
              className="border-b-[1px] px-4 py-2  outline-none capitalize"
              value={profile.email}
              onChange={changeval}
            />
          </div>
          <div className="flex flex-col sm:flex-row  px-4 py-2 items-center">
            <label className="font-bold w-full text-left text-lg sm:w-[150px] capitalize">
              address :{" "}
            </label>
            <input
              className="border-b-[1px] px-4 py-2  outline-none capitalize"
              value={profile.profile.address}
              onChange={changeval}
            />
          </div>
          <div className="flex flex-col sm:flex-row  px-4 py-2 items-center">
            <label className="font-bold w-full text-left text-lg sm:w-[150px] capitalize">
              about :{" "}
            </label>
            <input
              className="border-b-[1px] px-4 py-2  outline-none capitalize"
              value={profile.profile.about}
              onChange={changeval}
            />
          </div>
          <div className="flex flex-col sm:flex-row  px-4 py-2 items-center">
            <label className="font-bold w-full text-left text-lg sm:w-[150px] capitalize">
              joined :{" "}
            </label>
            <input
              className="border-b-[1px] px-4 py-2  outline-none capitalize"
              value={new Date(profile.createdAt).toDateString()}
              onChange={changeval}
            />
          </div>
        </div>
        <div className="p-6 flex items-center flex-col justify-center">
          <img alt="profile" src={profile.profile.pic} />
          <div className="flex items-center justify-center my-[25px]">
        <button className="text-primary rounded-md font-semibold bg-primarygrey mr-2 capitalize py-2 px-4">
          change pic
        </button>
        <button className="text-white rounded-md font-semibold bg-violetMain capitalize py-2 px-4">
          Delete pic
        </button>
      </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-[25px]">
        <button className="text-primary rounded-md font-semibold bg-primarygrey mr-2 capitalize py-2 px-4">
          discard changes
        </button>
        <button className="text-white rounded-md font-semibold bg-violetMain capitalize py-2 px-4">
          update profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
