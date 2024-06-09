import React from 'react';
import AboutMeimg from '../assets/aboutme1.svg'

function AboutMe() {
  return (
    <div id='know-me' className='mt-3 flex flex-col items-center py-10'>
      <h1 className='text-xl lg:text-2xl m-4 text-center text-blue-300 uppercase font-tiny5 font-bold'>Know Me</h1>
      <p className="w-48 bg-blue-300 rounded-xl h-1 lg:h-2 mb-4"></p>
      <div className='flex flex-wrap w-full lg:flex-wrap justify-around items-center'>
          <div className='px-6 text-slate-200 md:w-2/3 lg:w-1/2 text-center leading-relaxed cursor-pointer unselectable'>
          I'm a 17-year-old developer living in Pakistan. I discovered my passion for coding after joining the CS society in high school. I love using my creativity to build things for the web. With hard work, self-discipline, and commitment, I became a frontend developer. What keeps me going is that I find learning new things exciting and enjoy facing challenges. Besides coding, I like building side projects because it lets me be creative and do interesting things.
          </div>

          <img className='h-80 w-80' src={AboutMeimg} alt='About Me image' />
      </div>
    </div>
  );
}

export default AboutMe;
