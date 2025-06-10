import React from 'react'
import Filter from './Filter'
import Checkbox from './Checkbox'

const Filters = () => {
  return (
    <div className='flex flex-col gap-8'>
    <Filter category="COST"></Filter>
    <Filter category="SURFACE"></Filter>
    <Checkbox></Checkbox>
    </div>
  )
}

export default Filters
