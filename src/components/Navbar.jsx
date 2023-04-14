import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header className='bg-blue-500 py-8 flex justify-center'>
      <Link to='/'>
        <h1 className='text-white text-2xl font-bold hover:scale-110 transition-all duration-500'>¡IBM Trivia!</h1>
      </Link>
    </header>
    
  )
}
