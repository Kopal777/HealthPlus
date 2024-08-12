"use client"
import { Button } from '@/components/ui/button'
import { GraduationCap, MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


function DoctorDetail({ doctor }) {

  const socialMedia =[
    {
      id: 1,
      icons: '/facebook.png'
    },
    {
      id: 2,
      icons: '/linkedin.png'
    },
    {
      id: 3,
      icons: '/twitter.png'
    },
    {
      id: 4,
      icons: '/youtube.png'
    }    
  ]
  return (
    <div className='mr-3'>
      <div className='grid grid-cols-1 md:grid-cols-3 border-[1px] border-gray-800 p-5 mt-5 rounded-lg'>

        {/* Doctor Image */}
        <div>
          <Image className='rounded-lg h-[270px] w-full object-cover'
            src={doctor.attributes?.Image?.data?.[0].attributes?.url}
            alt='doctor'
            height={500}
            width={500} />
        </div>

        {/* Doctor Info */}
        <div className='col-span-2 sm:mt-5 md:px-10 flex flex-col gap-2'>
          <h2 className='text-white font-bold text-2xl'>
            {doctor.attributes?.Name}
          </h2>
          <h2 className='flex gap-1.5 text-gray-500'>
            <GraduationCap />
            <span>
              {doctor.attributes.Year_of_Experience} of experience
            </span>
          </h2>
          <h2 className='flex gap-1.5 text-gray-500'>
            <MapPin />
            <span>
              {doctor.attributes.Address} of experience
            </span>
          </h2>
          <h2 className='bg-[#656565] text-[#14edcc] w-fit px-2 py-1 rounded-full'>
            {doctor.attributes.categories.data[0].attributes.Name}
          </h2>

          <div className='flex gap-3 my-3 '>
            {socialMedia.map((item, index)=>(
              <Image className='cursor-pointer hover:scale-110 transition-all ease-in-out'
              src={item.icons} 
              key={index}
              alt='sns'
              width={30}
              height={30}/>
            ))}
          </div>

          <Button className="rounded-full w-fit">Book Appointment</Button>
        </div>
      </div>
      {/* About Doctor */}
      <div className='border-[1px] border-gray-800 p-5 mt-5 rounded-lg'>
        <h2 className='font-bold text-[24px] text-white'>About Me</h2>
        <p className='text-gray-400 mt-2 tracking-wider'>
          {doctor.attributes?.About}
        </p>
      </div>
    </div>
  )
}

export default DoctorDetail
