import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    const Menu = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'Explore',
            path: '/explore'
        },
        {
            id: 3,
            name: 'Contact Us',
            path: '/contactUs'
        }
    ]
    return (
        <div className='flex justify-between items-center p-4 md:px-20 shadow-[#0e1525] shadow-md'>
            <div className='flex items-center gap-12'>
                <Image
                    src="/logo.svg"
                    alt='logo'
                    width={100}
                    height={60} />
                <ul className='sm:flex gap-8 hidden'>
                    {Menu.map((item, index) => (
                        <Link key={index} href={item.path}>
                        <li className='text-white hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out'>{item.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <Button>Get Started</Button>
        </div>
    )
}

export default Header
