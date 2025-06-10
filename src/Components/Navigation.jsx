import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='flex justify-between tracking-[0.25em] w-200 py-10 px-20'>
      <Link to="/">HOME</Link>
      <Link to="/home">PROJECTS</Link>
      <Link to="/blogs">BLOGS</Link>
      <Link to="/photos">PHOTOS</Link>
      <Link to="/about">ABOUT US</Link>
    </nav>
  );
}

export default Navigation