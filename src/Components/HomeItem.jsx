import React from 'react'
import Stairs from '../assets/Stairs.png'
import Bathtub from '../assets/Bathtub.png'
import SingleBed from '../assets/SingleBed.svg'
import Heart from '../assets/Heart.svg'
import ShoppingCart from '../assets/ShoppingCart.svg'
import House from '../assets/House.png'

const HomeItem = ({title, ratings, numberOfRatings, rooms, bathrooms, surface, price, projectPrice, year, image, onClick}) => {
  return (
    <div className='flex flex-col w-[180px] h-[240px]'onClick={onClick}>
      
      <div className='relative h-1/2'>
        <img src={image} alt='house' className='w-full h-full object-cover rounded-t-md' />
        

        <div className='absolute bottom-2 right-2 text-[8px] font-semibold bg-secondary text-white rounded-xl px-2 py-1'>
          {ratings}/5 | {numberOfRatings} ratings
        </div>
      </div>

      <div className='flex justify-between items-center mt-1'>
        <p className='text-main font-bold'>{title}</p>
        <div className='flex justify-between w-full pl-12 font-semibold'>
          <div className="flex items-center gap-1 text-xs">
            <img src={Bathtub} alt="bathtub" className="w-3 h-3 object-contain" />
            <p>{rooms}</p>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <img src={Bathtub} alt="bathtub" className="w-3 h-3 object-contain" />
            <p>{bathrooms}</p>
          </div>
        </div>
      </div>

      <div className='flex justify-between w-full items-center mt-1'>
        <div className='w-full flex flex-col'>
          <div className='flex justify-between font-semibold text-[9px] w-full pr-4'>
            <p>{surface} m2</p>
            <p>{price} zł</p>
            <p>{projectPrice} zł</p>
          </div>
          <p className='text-[10px] mr-auto'>{year}</p>
        </div>
        <img src={Heart} alt='heart' />
      </div>

      <button className='bg-main px-4 py-1 rounded-md w-full text-black font-semibold mt-2'>
        Add to cart
      </button>
    </div>
  )
}

export default HomeItem
