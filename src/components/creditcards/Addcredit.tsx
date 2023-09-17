import React from 'react'
import { SquaresPlusIcon } from "@heroicons/react/24/solid";

const Addcredit = () => {
  return (
    <div className="w-72 sm:w-96 h-52  rounded-xl relative flex flex-col font-medium text-skyMain border-2 border-dotted border-skyMain items-center justify-center cursor-pointer">
<SquaresPlusIcon className='text-skyMain p-3 w-28' />
    Add payment method
  </div>
  )
}

export default Addcredit