"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


const Header = () => {

    const { user } = useKindeBrowserClient();
    useEffect(() => {
        console.log("Userinfo", user);
    }, [user]);

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
                <Image className='cursor-pointer'
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
            {user ?
                <Popover>
                    <PopoverTrigger>
                        <Image className='rounded-full cursor-pointer'
                            src={user?.picture}
                            alt='profile'
                            width={50}
                            height={50} />
                    </PopoverTrigger>
                    <PopoverContent className="w-44">
                        <ul className='flex flex-col gap-y-2'>
                            <li className='cursor-pointer hover:bg-slate-100 px-2 py-0.5 rounded-md'>Profile</li>
                            <li className='cursor-pointer hover:bg-slate-100 px-2 py-0.5 rounded-md'>My Booking</li>
                            <li className='cursor-pointer hover:bg-slate-100 px-2 py-0.5 rounded-md'>
                                <LogoutLink>Log Out</LogoutLink>
                            </li>
                        </ul>
                    </PopoverContent>
                </Popover>
                : <LoginLink> <Button>Get Started</Button> </LoginLink>
            }


        </div>
    )
}

export default Header
