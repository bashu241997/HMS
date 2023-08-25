import React from 'react'

const WorkWeek = () => {
  return (
    <div className='capitalize text-white bg-black p-4 flex items-center justify-between rounded-[10px]'>
      <div className='px-2'>
        <h5 className='py-1'>next week</h5>
        <h6 className='text-[12px] text-grey-600'>upcoming schedules 2</h6>
      </div>
      <div className='bg-violetMain rounded-[10px] py-2 px-4 font-bold'>
        open
      </div>
    </div>
  )
}

export default WorkWeek