import React from 'react'

const Header = () => {
  return (
    <div className='p-4 fixed w-full bg-primary flex justify-between sm:flex sm:justify-around'>
      <a href="/"><h1 className='text-secondry ml-20 text-3xl sm:text-[10px] sm:ml-0 font-serif font-bold'>HOME</h1></a>
      <a href="#about"><h1 className='text-tertiary text-3xl sm:text-[10px] font-serif font-semibold'>ABOUT</h1></a>
      <a href="#education"><h1 className='text-white text-3xl sm:text-[10px] font-serif font-semibold'>EDUCATION</h1></a>
      <a href="#project"><h1 className='text-secondry text-3xl sm:text-[10px] font-serif font-semibold'>PROJECTS</h1></a>
      <a href="#contact"><h1 className='text-tertiary mr-20 text-3xl sm:text-[10px] sm:mr-0 font-serif font-semibold'>CONTACT</h1></a>
    </div>
  )
}

export default Header
