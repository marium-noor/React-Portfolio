import React from 'react'

function HeroPortfolio() {
  return (
    <div className=' h-[80vh] flex justify-start ml-8 md:ml-20 items-center'>
      <div className='flex flex-col'>
          <div className='flex flex-row w-full space-x-2 md:space-x-3'>
              <span className="md:w-10 w-10 bg-yellow-200 rounded-xl h-1 md:h-2 my-1"></span>
              <span className="md:w-16 w-12 bg-yellow-200 rounded-xl h-1 md:h-2 my-1"></span>
              <span className="md:w-56 w-28 bg-yellow-200 rounded-xl h-1 md:h-2 my-1"></span>
          </div>


          <div className='flex flex-row w-full space-x-2 md:space-x-3'>
              <span className="md:w-48  w-28 bg-purple-300 rounded-xl h-1 md:h-2 my-1"></span>
              <span className="md:w-24 w-16 bg-purple-300 rounded-xl h-1 md:h-2 my-1"></span>
              <span className="md:w-10 w-6 bg-purple-300 rounded-xl h-1 md:h-2 my-1"></span>
          </div>

          <div className='flex flex-row w-full space-x-2 md:space-x-3'>
              <span className="md:w-24 w-16 bg-blue-300 rounded-xl h-1 md:h-2 my-1"></span>
              <span className="md:w-10 w-6 bg-blue-300 rounded-xl h-1 md:h-2 my-1"></span>
              <span className="md:w-48 w-28 bg-blue-300 rounded-xl h-1 md:h-2 my-1"></span>
          </div>

          <div className='flex flex-row w-full space-x-2 md:space-x-3'>
              <span className="md:w-10 w-[30px] bg-pink-300 rounded-xl h-1 md:h-2 my-1"></span>
              <span className="md:w-[300px] w-[170px] bg-pink-300 rounded-xl h-1 md:h-2 my-1"></span>
          </div>


          <div className='md:px-5 md:my-3 my-1 px-3'>
              <h1 className='text-4xl md:text-5xl py-2 font-tiny5 text-slate-100'>Maryam...</h1>
              <p className='uppercase text-lg md:text-xl font-semibold text-slate-400'>Frontend developer</p>
          </div>

          <div className='flex flex-row w-full space-x-2 md:space-x-3'>
              <span className="md:w-10 w-10 bg-yellow-200 rounded-xl h-1 md:h-2 my-1"></span>
              <span className="md:w-16 w-12 bg-yellow-200 rounded-xl h-1 md:h-2 my-1"></span>
              <span className="md:w-56 w-28 bg-yellow-200 rounded-xl h-1 md:h-2 my-1"></span>
          </div>


          <div className='flex flex-row w-full space-x-2 md:space-x-3'>
              <span className="md:w-48  w-28 bg-purple-300 rounded-xl h-1 md:h-2 my-1"></span>
              <span className="md:w-24 w-16 bg-purple-300 rounded-xl h-1 md:h-2 my-1"></span>
              <span className="md:w-10 w-6 bg-purple-300 rounded-xl h-1 md:h-2 my-1"></span>
          </div>

          <div className='flex flex-row w-full space-x-2 md:space-x-3'>
              <span className="md:w-24 w-16 bg-blue-300 rounded-xl h-1 md:h-2 my-1"></span>
              <span className="md:w-10 w-6 bg-blue-300 rounded-xl h-1 md:h-2 my-1"></span>
              <span className="md:w-48 w-28 bg-blue-300 rounded-xl h-1 md:h-2 my-1"></span>
          </div>

          <div className='flex flex-row w-full space-x-2 md:space-x-3'>
              <span className="md:w-10 w-[30px] bg-pink-300 rounded-xl h-1 md:h-2 my-1"></span>
              <span className="md:w-[300px] w-[170px] bg-pink-300 rounded-xl h-1 md:h-2 my-1"></span>
          </div>
      </div>
    </div>
  )
}

export default HeroPortfolio
