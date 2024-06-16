import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';
import axios from 'axios';
function Freebook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get('http://localhost:3000/book');
        console.log(res.data.filter((data)=>data.category==="Free"));
        setBooks(res.data);
      } catch (error) {
        console.error('Error fetching books:', error.response || error.message || error);
      }
    };

    getBooks();
  }, []);


  
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className='max-w-screen-2Xl container mx-auto md:px-20 px-4'>
        <h1 className='font-bold text-x1 pb-2'>Free Offered courses</h1>
        <p>
          you can find the free books here!!
        </p>
      </div>
      <div className="slider-container max-w-screen-2Xl container mx-auto md:px-20 px-4">
      <Slider {...settings}>
        
          {books.map((item)=>(<Card item={item} key={item.id}/>

          ))}
        
      </Slider>
    </div>
    </>
    
  )
}

export default Freebook
