import House from '../assets/House.png'
import house2 from '../assets/house2.png'
import house3 from '../assets/house3.png'

export function FillHomes(){
    const homesData = [
  {
    id: 1,
    title: "Zakhyntos",
    ratings: 4.65,
    numberOfRatings: 29,
    rooms: 3,
    bathrooms: 3,
    surface: 165.65,
    projectPrice: 7999,
    year: 2023,
    price: 799000,
    image: House,
  },
  {
    id: 2,
    title: "Penelopa",
    ratings: 4,
    numberOfRatings: 6,
    rooms: 11,
    bathrooms: 4,
    surface: 1165.65,
    projectPrice: 7999,
    year: 2004,
    price: 4599000,
    image: house2,
  },
  {
    id: 3,
    title: "Odysseus",
    ratings: 4.5,
    numberOfRatings: 120,
    rooms: 4,
    bathrooms: 3,
    surface: 165.65,
    projectPrice: 7999,
    year: 2017,
    price: 869000,
    image: house3,
  },

    {
    id: 4,
    title: "Koniczyna",
    ratings: 4.9,
    numberOfRatings: 320,
    rooms: 3,
    bathrooms: 1,
    surface: 65.50,
    projectPrice: 3999,
    year: 2015,
    price: 350000,
    image: house2,
  },
];

return homesData;

}