"use client"
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'
import GlobalApi from '@/_utils/GlobalApi'
import Image from 'next/image'
import Link from 'next/link'

const CategorySearch = () => {

  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList()
  }, [])

  const getCategoryList = () => {
    GlobalApi.getCategory().then(resp => {
      setCategoryList(resp.data.data);
    })
  }
  return (
    <div className='text-white flex flex-col items-center my-8'>
      <h2 className='font-bold text-4xl tracking-wide mb-3'>Search <span className='text-primary'>Doctors</span>
      </h2>
      <h2 className='text-gray-500 text-xl mb-4 mx-3'>Search your Doctor and Book an  Appointment</h2>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Search" />
        <Button type="submit">
          {/* Search component from Lucid React */}
          <Search height={18} /> Search
        </Button>
      </div>


      {/* Display list of categories */}
      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-8'>
        {categoryList.length>0 ? categoryList.map((item, index) => index<6 && (
            <Link href={'/search/'+item.attributes.Name} key={index} className='flex flex-col text-center items-center mx-3 my-5 rounded-xl bg-[#1d2437] hover:bg-[#353e55] hover:scale-110 transition-all ease-in-out cursor-pointer p-5'>
              <Image
                src={item.attributes?.Icon?.data[0].attributes?.url}
                alt='icon'
                width={80}
                height={80} />
              <label className='mt-4'>{item.attributes?.Name}</label>
            </Link>
        ))
      :
      [1,2,3,4,5,6].map((item, index)=>(
      <div key={index} className='h-[163px] my-5 mx-3 bg-[#1d2437] w-[170px] rounded-xl animate-pulse'>
      </div>
      ))
      }
      </div>
    </div>
  )
}

export default CategorySearch
