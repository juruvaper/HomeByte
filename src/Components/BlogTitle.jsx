import React from 'react'
import profilePicture from '../assets/ProfilePicture.svg'


const BlogTitle = () => {
  return (
    <div className='w-120 flex gap-4 px-8 py-2'>
        <img src={profilePicture}></img>
        <div className='flex flex-col gap-1'>
            <p className='text-secondary font-semibold tracking-wider'>PACIFICA</p>
            <p className='tracking-widest font-semibold text-l'>Pacifica in Rome</p>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa labore id quos earum perferendis dolor.</p>

        </div>
    </div>
  )
}

export default BlogTitle