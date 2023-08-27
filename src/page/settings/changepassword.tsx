import React from "react";

const Changepassword = () => {
  return (
    <div className="my-[15px] capitalize text-primary text-center min-h-[70vh] shadow-xl p-3 rounded-lg bg-white">
      <h4 className="px-3 py-3 font-bold text-lg">change your password</h4>

      <p className="capitalize font-medium text-sm mb-4 rounded-lg bg-green-100 px-6 py-5 text-green-700">
        last login : {new Date().toLocaleDateString()}
        {new Date().toLocaleTimeString()}
      </p>
      <div>
        <div className="flex flex-col sm:flex-row items-center justify-center my-2">
          <label className="w-[150px] text-right  font-medium  pr-2">
            user Name :{" "}
          </label>
          <input
            className="px-3 rounded-md py-[3px] bg-red-200 border-[1px] border-dotted border-skyMain text-primary focous:ring-0 outline-none"
            disabled
            placeholder="Cillian murphy"
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center my-2">
          <label className="w-[150px] text-right pr-2  font-medium ">
            old password :{" "}
          </label>
          <input
            className="px-3 py-[3px]  rounded-md bg-red-200 border-[1px] border-dotted border-skyMain text-primary focous:ring-0 outline-none"
            placeholder="Old password"
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center my-2">
          <label className="w-[150px] text-right pr-2 font-medium ">
            new password :{" "}
          </label>
          <input
            className="px-3 py-[3px]  rounded-md  bg-red-200 border-[1px] border-dotted border-skyMain text-primary focous:ring-0 outline-none"
            placeholder="New password"
          />
        </div>
        <div className="flex items-center justify-center my-[25px]">
          <button className="text-primary rounded-md font-semibold bg-primarygrey mr-2 capitalize py-2 px-4">
            cancel
          </button>
          <button className="text-white rounded-md font-semibold bg-skyMain capitalize py-2 px-4">
            update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Changepassword;
