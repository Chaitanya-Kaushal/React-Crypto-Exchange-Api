import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full p-4 bg-black text-white flex gap-4 text-lg font-semibold justify-start'>
        
        <Link to='/' className='hover:text-gray-300'>Home</Link>
        <Link to='/exchange' className='hover:text-gray-300'>Exchanges</Link>
        <Link to='/coin' className='hover:text-gray-300'>Coins</Link>

    </div>
  )
}

export default Header