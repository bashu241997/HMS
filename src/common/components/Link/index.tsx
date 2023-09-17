import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
interface menulinks {
  label?: string;
  link?: any;
  Icon?: any;
  onclose?:any;
}

const MenuLinks = ({ label, link, Icon,onclose }: menulinks) => {

  const currentPage = usePathname();
  const route = "/"+currentPage.split("/")[1] 
  return (
    <li
      className={` ${route == link ? "bg-black text-[#fff]" :"text-primary hover:bg-primarygrey"} rounded-[10px] block duration-300 px-4 py-3 hover:scale-[1.05] `}
    >
      <Link className="text-[14px] capitalize flex justify-start" href={link} onClick={(e)=>{
        e.stopPropagation()
        if(onclose){
          onclose(false)
        }
      }}>
        <span className="pr-4">
          <Icon className={"w-[20px]"} />
        </span>
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default MenuLinks;
