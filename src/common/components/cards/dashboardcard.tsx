'use client'
import React, { useState ,useEffect} from 'react'
import { infoCards } from "@/common/interfaces/overviewpage";

const Index = (props:infoCards) => {
  const Icons = props.Icon
  return (
    <div className={`rounded-xl p-4 h-[150px] w-[23%] shadow-lg flex items-center justify-start ${props.backgroundColor}`}>
      <div className={`${props.iconbg} w-[60px] h-[60px] rounded-[50%] flex items-center justify-center`}>
        <Icons className="w-[30px] text-white" />
      </div>
      <div className='pl-3'>
        <h2 className='capitalize text-white font-bold text-xl'>{props.totals}K</h2>
        <h5 className='uppercase text-sm font-semibold text-white'>{props.label}</h5>
      </div>
    </div>
  )
}

export default Index
