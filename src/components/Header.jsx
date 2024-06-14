import React, { useState } from 'react'
import Logo from '../assets/logo.svg'
import { headerData } from '../data'
import { Menu, X } from 'lucide-react'
import Chat from './Chat'

function Header() {
    const [activeMenu, setActiveMenu] = useState(false)
    const [displayChat, setDisplayChat] = useState(false)

    function handleClick() {
        setActiveMenu(!activeMenu)
    }

    function showChat() {
      setDisplayChat(!displayChat)
    }

  return (
    <>
    <div className='shadow sticky z-10 top-5 w-[90%] mx-auto'>
      <nav className=' border-slate-400 px-4 lg:px-6 py-2.5 rounded-full border backdrop-blur-md'>
        <div className='flex lg:flex-nowrap justify-between items-center mx-auto'>
          {/* Logo */}
            <div className='flex text-white w-1/2'>
                <img className='h-8 w-16' src={Logo} alt="" />
                <h1 className='text-lg lg:text-xl ml-2 font-tiny5 font-bold'>Maryam.tech</h1>
            </div>
            {/* Links */}
            {headerData.map((item, index) => (
              <div key={index} className='hidden lg:flex space-x-6'>
                <a href={item.path} className='hover:font-bold text-md text-gray-300 font-thin'>{item.title}</a>
              </div>
            ))}
            <button onClick={showChat}  className='hidden lg:block hover:font-bold text-md text-gray-300 font-thin'>
              Chat
            </button>


            {/* Menu */}
            <div className="lg:hidden flex items-center text-white z-50">
              <button onClick={handleClick}>
                {activeMenu ? <X className='hidden' /> : <Menu />}
              </button>
            </div>
        </div>
      </nav>
    </div>

    {activeMenu && (
        <div className='lg:hidden top-0 left-0 z-40 bg-white text-slate-900 p-6 w-2/3 lg:w-1/2 h-[100vh] shadow-lg transition-transform transform translate-x-0 fixed'>
          <button onClick={handleClick} className='absolute top-4 right-4'>
            <X />
          </button>
          <div className='flex flex-col items-start space-y-6 mt-16'>
            {headerData.map((item, index) => (
              <a
                key={index}
                href={item.path}
                className='text-xl font-medium hover:text-indigo-600 transition-colors duration-200'
              >
                {item.title}
              </a>
              
            ))}
            <button onClick={showChat}
                className='text-xl font-medium hover:text-indigo-600 transition-colors duration-200'
                >
              Chat
            </button>

          </div>
        </div>
      )}
        {displayChat && <Chat onClose={showChat} />}
    </>
  )
}

export default Header
