'use client'
import GlobalApi from '@/_utils/GlobalApi';
import React, { useEffect, useState } from 'react'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';


function CategoryList() {
    const [categoryList, setCategoryList] = useState([]);
    const params = usePathname();
    const category = params.split('/')[2];

    useEffect(() => {
        getCategoryList()
    }, [])

    const getCategoryList = () => {
        GlobalApi.getCategory().then(resp => {
            setCategoryList(resp.data.data);
        })
    }

    return (
        <div className='h-screen my-5 flex flex-col text-[#d2d2d2]'>
            <Command style={{ padding: '0px' }} >
                <CommandInput placeholder="Type a command or search..." />
                <CommandList className="overflow-visible">
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        {categoryList.map((item, index) => (
                            <div key={index} className={`${category == item.attributes.Name && 'bg-blue-200'} m-1 hover:bg-blue-200 cursor-pointer rounded-md`}>
                            <Link href={'/search/'+ item.attributes.Name} >
                            <CommandItem key={index} className="font-bold" >
                                <div  className='p-[6px] items-center flex gap-2'>
                                    <Image
                                        src={item.attributes?.Icon?.data[0].attributes?.url}
                                        alt='icon'
                                        width={34}
                                        height={34} />
                                    <label className='p-1'>
                                        {item.attributes.Name}
                                    </label>
                                </div>
                            </CommandItem>
                            </Link>
                            </div>
                        ))}
                    </CommandGroup>
                </CommandList>
            </Command>

        </div>

//         <div>
//             <Command>
//   <CommandInput placeholder="Type a command or search..." />
//   <CommandList>
//     <CommandEmpty>No results found.</CommandEmpty>
//     <CommandGroup heading="Suggestions">
//       <CommandItem>Calendar</CommandItem>
//       <CommandItem>Search Emoji</CommandItem>
//       <CommandItem>Calculator</CommandItem>
//     </CommandGroup>
//     <CommandSeparator />
//     <CommandGroup heading="Settings">
//       <CommandItem>Profile</CommandItem>
//       <CommandItem>Billing</CommandItem>
//       <CommandItem>Settings</CommandItem>
//     </CommandGroup>
//   </CommandList>
// </Command>
//         </div>

    )
}

export default CategoryList
