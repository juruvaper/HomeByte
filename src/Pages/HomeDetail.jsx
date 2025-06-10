import React from 'react';
import house2 from '../assets/house2.png';
import left from '../assets/Left.svg';
import right from '../assets/Right.svg';
import photo1 from '../assets/1stPhoto.svg';
import photo2 from '../assets/2ndPhoto.svg';
import photo3 from '../assets/3rdPhoto.svg';
import photo4 from '../assets/4thPhoto.svg';
import Navigation from '../Components/Navigation';
import { Outlet } from 'react-router-dom';

const HomeDetail = () => {
  return (
    <div>
      <div className='px-20 flex flex-col gap-4 py-4'>
        <p className='tracking-[0.25em] font-semibold text-2xl text-left'>
          ZEPHRYUS
        </p>

        <div className='flex w-full gap-8'>
          <div className='flex flex-col gap-2 w-1/2 items-start'>
            <img src={house2} alt="House" />
            <div className='flex justify-between w-full px-10'>
              <img src={left} className='w-10 h-10' alt="Left" />
              <img src={right} className='w-9 h-9' alt="Right" />
            </div>
            <p className='text-sm font-regular self-center'>1/17</p>
            <div className='flex justify-between w-full'>
              <img src={photo1} alt="Photo 1" />
              <img src={photo2} alt="Photo 2" />
              <img src={photo3} alt="Photo 3" />
              <img src={photo4} alt="Photo 4" />
            </div>
          </div>

          <div className='w-1/2 flex flex-col gap-4 px-8'>
            <p className='font-semibold tracking-widest text-left'>
              6 ROOMS, 1 KITCHEN, 2 BATHROOMS + <span className='text-secondary'>GARAGE</span>
            </p>
            <div className='flex justify-between'>
              <div className='flex flex-col items-start tracking-widest'>
                <p>Designed by: Józef Sobieski</p>
                <p><span className='text-secondary font-bold'>2021</span> | POLAND</p>
              </div>
              <p className='font-bold text-main'>7399 ZŁ</p>
            </div>

            <div className='flex flex-col gap-4 my-8'>
              <div className='flex justify-between'>
                <p>Surface</p>
                <p className='text-main font-semibold'>175.42 m2</p>
              </div>
              <div className='flex justify-between'>
                <p>Garage</p>
                <p className='text-main font-semibold'>35.42 m2</p>
              </div>
              <div className='flex justify-between'>
                <p>Min plot size</p>
                <p className='text-main font-semibold'>30 x 32 m</p>
              </div>
              <div className='flex justify-between'>
                <p>2021 norm</p>
                <p className='text-main font-semibold'>YES</p>
              </div>
              <div className='flex justify-between py-4'>
                <div className='flex flex-col flex-gap font-semibold items-start'>
                  <p>Estimated cost</p>
                  <p className='text-secondary'>II quarter of 2025</p>
                </div>
                <p className='font-semibold text-xl'>1 119 000 PLN</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default HomeDetail;
