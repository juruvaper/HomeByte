import React from 'react'
import google from '../assets/Google.png'
import apple from '../assets/Apple.png'
import facebook from '../assets/Facebook.png'
import homebyte from '../assets/Homebyte.png'
import { Navigate, useNavigate } from 'react-router-dom'
const Logon = () => {
  const navigate = useNavigate();
  return (
    <div className='flex gap-30 justify-center items-center h-120'>

         <div className="w-96 h-full">
            <img src={homebyte} className="w-full h-full object-cover rounded-lg" alt="homebyte" />
        </div>

        <div className='flex flex-col gap-8 w-90 justify-center'>
            <p className='text-4xl text-center'>Hello <span className='text-main'>again!</span></p>
            <p className='bg-mainWhite text-gray-500 py-2 px-14 rounded-3xl flex justify-start'>username</p>
            <p className='bg-mainWhite text-gray-500 py-2 px-14 rounded-3xl flex justify-start'>password</p>
            <p className='flex justify-end gap-1'>Forget your <span className='text-main'>password?</span></p>
            <button className="bg-main text-black w-1/2 self-center py-2 rounded-3xl focus:outline-none focus:ring-0 hover:bg-violet-500 active:bg-violet-700 transition-colors duration-200"
            onClick={() => navigate('/home')}
            > Login
            </button>

            <p className='tracking-[.25em] font-regular'>Or continue with</p>
            <div className='flex px-16 justify-between'>
                <img src={google} className='w-8'></img>
                <img src={apple} className='w-8'></img>
                <img src={facebook} className='w-8'></img>
            </div>

        </div>
    </div>
  )
}

export default Logon