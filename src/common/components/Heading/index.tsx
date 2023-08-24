import React from 'react'

const Index = ({title="john",subheading=""}) => {
  return (
    <> <h3 className='text-2xl font-bold capitalize'>
      {`welcome, Dr. ${title}`}
    </h3>
    {subheading && <p className='py-3 text-sm text-primary'>{subheading}</p>}
    </>
  )
}

export default Index
