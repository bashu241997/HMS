import React from "react";
import { Bars3BottomLeftIcon} from "@heroicons/react/24/solid"

const PatientsTable = ({patients}: any) => {
  return (
    <section className="container mx-auto">
   
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-[18px] capitalize text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <div className="w-[25px]" />
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                gender
              </th>
              <th scope="col" className="px-6 py-3">
                email
              </th>
              <th scope="col" className="px-6 py-3">
                mobile No
              </th>
              <th scope="col" className="px-6 py-3">
                status
              </th>
              <th scope="col" className="px-6 py-3">
                Joined date
              </th>
            </tr>
          </thead>
          <tbody>
         {   patients.map((e:any,i:number) => {
                return  <tr className="hover:scale-110 duration-300 text-[16px] bg-white cursor-pointer hover:bg-skyPrimary capitalize font-semibold">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                  <Bars3BottomLeftIcon width={25} />
                  </div>
                </td>
                <td
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src={e?.profile?.pic}
                    alt="Jese image"
                  />
                  <div className="pl-3">
                    <div className="text-base font-semibold">{`${e?.profile?.firstname} ${e?.profile?.lastname}`}</div>
                  </div>
                </td>
                <td className="px-6 py-4">{e?.profile?.gender}</td>
                <td className="px-6 py-4">{e?.email}</td>
                <td className="px-6 py-4">{e?.profile?.mobile}</td> 
                <td className={`px-6 py-4`}><span className={`px-[15px] py-[5px] rounded-[15px] ${e?.roles === "new patient" ? "bg-redPrimary text-redSecondary":"bg-violetPrimary text-violetSecondary"}`}>{e?.roles}</span></td>
                <td className="px-6 py-4">{new Date(e?.joinedDate).toLocaleDateString()}</td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PatientsTable;
