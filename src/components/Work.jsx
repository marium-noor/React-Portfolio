import React from 'react';
import { workCardData } from '../data';
import { Link, GithubIcon } from 'lucide-react';

const Work = () => {
  return (
    <div className='mt-3 flex flex-col items-center py-10'>
      <h1 className='text-3xl m-4 text-center text-pink-300 uppercase font-tiny5 font-bold'>Few Of My Work</h1>
      <p className="w-80 bg-pink-300 rounded-xl h-2 mb-4"></p>
      <div className='flex w-full lg:w-3/4 m-3 flex-wrap justify-center'>
        {workCardData.map((item, index) => (
          <div key={index} className='text-white bg-gray-800 border border-gray-600 rounded-lg w-full lg:w-5/12 p-5 flex flex-col justify-between m-2'>
            <div className="flex justify-between items-center mb-4">
              <h2 className='text-lg font-semibold'>{item.title}</h2>
              <div className="flex space-x-3">
                <a href="https://github.com" target='_blank' className="hover:text-pink-300"><GithubIcon /></a>
                <a href="https://vercel.com" target='_blank' className="hover:text-pink-300"><Link /></a>
              </div>
            </div>
            <p className='text-sm mb-4'>{item.preview}</p>
            <div className='flex flex-wrap space-x-2'>
              {item.technologies.map((tech, techIndex) => (
                <span key={techIndex} className='text-xs bg-gray-900 rounded-md px-2 py-1 mb-2'>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;