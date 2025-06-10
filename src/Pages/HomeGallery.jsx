import React, { useEffect, useState } from 'react'
import Stairs from '../assets/Stairs.png'
import Bathtub from '../assets/Bathtub.png'
import SingleBed from '../assets/SingleBed.svg'
import Heart from '../assets/Heart.svg'
import ShoppingCart from '../assets/ShoppingCart.svg'
import House from '../assets/House.png'
import house2 from '../assets/house2.png'
import house3 from '../assets/house3.png'
import HomeItem from '../Components/HomeItem'
import Sorting from '../assets/Sorting.svg'
import Navigation from '../Components/Navigation'
import Filters from '../Components/Filters'
import { FillHomes } from '../MockData/GalleryMock'
import CheckboxList from '../Components/Checkbox'
import { Outlet, useNavigate } from 'react-router-dom'

const HomeGallery = () => {
  const [data, setData] = useState([]);
  const [titleFilter, setTitleFilter] = useState('');
  const [filters, setFilters] = useState({
    price500k: false,
    surface70: false,
    year: false,
    basement: false,
  });

  useEffect(() => {
    setData(FillHomes());
  }, []);

  const handleOnChange = (e) => {
    setTitleFilter(e.target.value);
  };

  const navigate = useNavigate();

  const handleOnClick = () =>{
    navigate('/home/homedetail')
  }

  const filteredHomes = data.filter((house) => {
    const matchesTitle = house.title.toLowerCase().includes(titleFilter.toLowerCase());
    const matchesPrice = !filters.price500k || house.price < 500000;
    const matchesSurface = !filters.surface70 || house.surface >= 70;
    const matchesYear = !filters.year || house.year >= 2021;
    const matchesBasement = !filters.basement || house.rooms > 0;

    return matchesTitle && matchesPrice && matchesSurface && matchesYear && matchesBasement;
  });

  return (
    <div className='w-screen px-50 flex flex-col gap-4 justify-center items-center'>

      <div className='flex w-full items-start justify-center gap-6 py-8'>
        <div className='w-1/4 p-4 text-gray-500'>
            <CheckboxList filters={filters} setFilters={setFilters} />
        </div>

        <div className='flex flex-col w-3/4 gap-6'>
          <div className='flex justify-between items-center gap-4'>
                <input
                placeholder='What do you look for...'
                 className='bg-gray-300 text-gray-500 placeholder-gray-400 px-4 rounded-md w-60 focus:outline-none focus:ring-0'
                 onChange={handleOnChange} />
            <div className='flex items-center bg-gray-300 px-4 rounded-md gap-2'>
              <img src={Sorting} alt="Sort Icon" />
              <p className='text-gray-400'>Sort</p>
            </div>
          </div>

          <div className='min-h-[600px] grid grid-cols-3 gap-6 w-full'>
  {filteredHomes.length === 0 ? (
    <p className="text-gray-400">No match found</p>
  ) : (
    filteredHomes.map((i) => (
      <HomeItem
        key={i.title}
        title={i.title}
        ratings={i.ratings}
        numberOfRatings={i.numberOfRatings}
        rooms={i.rooms}
        bathrooms={i.bathrooms}
        surface={i.surface}
        projectPrice={i.projectPrice}
        year={i.year}
        price={i.price}
        image={i.image}
        onClick={handleOnClick}
      />
    ))
  )}
</div>

        </div>
      </div>
    </div>
  )
  ;
};

export default HomeGallery;