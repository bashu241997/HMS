import React from 'react'
import {
  CloudIcon
} from "@heroicons/react/24/solid";

const page = () => {
  return (
    <div className='bg-white text-skyMain flex-col font-semibold capitalize h-full  w-full flex items-center justify-center'>
      <CloudIcon className='text-skyMain w-[100px] m-4' />
      <p>select any chat to see the Messages or chat history</p>
    </div>
  )
}
export default page