import { GithubIcon, Linkedin, Mail, Pen } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div id='socials' className='border-t mt-9 mx-5 py-5 px-2 lg:p-7 border-gray-500'>
      <div className='flex flex-col items-center lg:flex-row lg:justify-between lg:space-y-0'>
        <div className='flex flex-col space-y-3 items-center lg:items-start'>
          <div className='flex space-x-2 mb-2 lg:mb-0 text-slate-400'>
            <a href="https://github.com/marium-noor" target='_blank' className='hover:text-pink-300'><GithubIcon /></a>
            <a href="https://linkedin.com/in/mariumnoor29" target='_blank' className='hover:text-pink-300'><Linkedin /></a>
            <a href="mailto:imariumnoor@gmail.com" target='_blank' className='hover:text-pink-300'><Mail /></a>
            <a href="" className='hover:text-pink-300'><Pen /></a>
          </div>
          <p className='text-[12px] font-tiny5 text-slate-300 lg:hidden'>@ 2024 Marium Noor</p>
        </div>
        <p className='text-[12px] font-tiny5 text-slate-300 hidden lg:block'>@ 2024 Marium Noor</p>
      </div>
    </div>
  )
}

export default Footer;
