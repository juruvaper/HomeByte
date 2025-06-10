import React from 'react'

const Filter = ({category}) => {
  return (
    <div>
        <div className='flex'>
        <p className='text-main ml-0'>{category}</p>
      </div>
      <div className='flex gap-8'>
        <p className='border-b-1 border-white'>min</p>
        <p>max</p>
      </div>
    </div>
  )
}

export default Filter