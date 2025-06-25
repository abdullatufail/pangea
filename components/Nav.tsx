import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Nav = () => {
  return (
    <div className='absolute w-full flex justify-center tracking-tighter z-50'>
        <div className='w-full px-10 contec text-sm font-bold sticky mt-2 flex  justify-between items-center text-white rounded-lg '>
            <h1 className='text-xl font-medium '>pangea</h1>
            <div className='text-xs flex gap-10'>
                <Link href={'/about'}>about</Link>
                <Link href={'/about'}>services</Link>
                <Link href={'/about'}>contact</Link>
            </div>
            <Button className='bg-white text-blue-900 hover:text-white'>Book A Call</Button>
        </div>
    </div>
  )
}

export default Nav