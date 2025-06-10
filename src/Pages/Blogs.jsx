import React from 'react'
import BlogTitle from '../Components/BlogTitle'
import Eye from '../assets/Eye.svg'
import Nature from '../assets/Nature.svg'
import Star from '../assets/Star.svg'

const Blogs = () => {
  return (
    <div className='flex w-full justify-between gap-16'>
       <div className='w-1/2'>
        <div className='flex flex-col gap-6'>
            <BlogTitle/>
            <BlogTitle/>
            <BlogTitle/>
            <BlogTitle/>
        </div>
       </div>

        <div className='w-1/2 flex flex-col gap-3'>
            <p className='text-2xl font-bold'>"I've never believed we would make it"</p>
            <div className='flex gap-70'>
                
                <div className='flex gap-2 items-center'>
                    <img src={Eye} className='w-[10px] h-[10px]'></img>
                    <p className='text-[10px] text-main'>21 859 views</p>
                </div>

                <div className='flex gap-2 items-center'>
                    <img src={Star} className='w-[10px] h-[10px]'></img>
                    <p className='text-[10px] text-main'>287</p>
                </div>

            </div>

            <div className='flex justify-between gap-4 items-center'>
                <img src={Nature} className='object-fit w-100 h-auto'></img>
                <div className='flex flex-col items-left justify-left gap-4'>
                    <p>April, <span>2025</span></p>
                    <p className='tracking-[0.5em] text-secondary font-bold text-2xl'>ROME</p>
                </div>
            </div>

            <div className='w-150'>
                <p><span className='text-secondary font-semibold text-md'>WE WERE NEVER </span>the kind of couple who settled for "someday"</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur consequatur ex aut eos atque doloribus minus sapiente nobis quo veritatis perferendis laudantium voluptate eaque illum reiciendis, repudiandae qui perspiciatis dolores?
            pe eaque consectetur illo, vero sequi, earum assumenda hic incidunt quas perferendis quis. Minima.</p>
            </div>
        </div>

    </div>
  )
}

export default Blogs