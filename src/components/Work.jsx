import React from 'react';
import Slider from "react-slick";
import { workCardData } from '../data';
import { Link, GithubIcon } from 'lucide-react';

const Work = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div id='myWork' className='mt-3 flex flex-col items-center py-10 mx-7'>
        <h1 className='text-xl lg:text-2xl m-4 text-center text-pink-300 uppercase font-tiny5 font-bold'>Few Of My Work</h1>
        <p className="w-56 lg:w-80 bg-pink-300 rounded-xl h-1 lg:h-2 mb-4"></p>
        <div className="slider-container w-full lg:w-2/3">
        <Slider {...settings}>
          {workCardData.map((item, index) => (
            <div key={index} className='flex justify-center'>
              <div className='text-white bg-gray-800 border border-gray-600 rounded-lg w-full p-5 flex flex-col'>
                <div className="flex justify-between items-center mb-4">
                  <h2 className='text-lg font-semibold'>{item.title}</h2>
                  <div className="flex space-x-3">
                    <a href={item.code} target='_blank' className="hover:text-pink-300"><GithubIcon /></a>
                    <a href={item.demo} target='_blank' className="hover:text-pink-300"><Link /></a>
                  </div>
                </div>
                <p className='text-sm mb-4'>{item.preview}</p>
                <div className='flex flex-wrap space-x-2'>
                  {item.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className='text-xs bg-gray-900 rounded-md px-2 py-1 mb-2'>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
        </div>
    </div>
  );
}

export default Work;