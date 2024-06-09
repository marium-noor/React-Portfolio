import React from 'react'
import {techs} from '../data'

const TechStack = () => {
  return (
    <div id='techstack' className='mt-3 flex flex-col items-center py-10'>
      <h1 className='text-xl lg:text-2xl m-4 text-center text-purple-300 uppercase font-tiny5 font-bold'>What I Work With</h1>
      <p className="w-56 lg:w-80 bg-purple-300 rounded-xl h-1 lg:h-2 mb-4"></p>
      <div className='w-full m-3 flex flex-wrap justify-center'>
        {techs.map((tech, index) => (
          <div key={index} className='border border-gray-700 rounded-xl p-1.5 m-1 lg:p-3 lg:m-2 text-center text-white bg-gray-800'>
            {tech} 
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStack
