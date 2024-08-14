import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-300 to-purple-500 shadow-xl">
        <div className='max-w-6xl mx-auto flex justify-between items-center p-3'>
        {/* {logo} */}
        <Link href='/' className='text-2xl font-extrabold group cursor-pointer '>
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-950 drop-shadow-md group-hover:from-blue-400 group-hover:to-blue-950'>
            Auth
        </span>
        <span className='text-transparent bg-clip-text bg-gradient-to-r  from-blue-300 to-purple-600 drop-shadow-md group-hover:from-purple-400 group-hover:to-purple-600'>
        App
        </span>
        </Link>
        <nav>
            <ul className='flex space-x-6'>
                <li><Link href='/' className='hover:text-gray-300'>Home</Link></li>
                <li><Link href='/sign-in' className='hover:text-gray-300'>Signin</Link></li>
                <li><Link href='/About' className='hover:text-gray-300'>About</Link></li>
            </ul>
        </nav>
        


        </div>
    </header>
  )
}
