import GlobalApi from '@/_utils/GlobalApi'
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const DoctorList = ({doctorList, heading}) => {

  return (
    <div className='mb-20 md:px-20'>
      <h2 className='font-bold text-4xl text-white m-4 p-2'> {heading}</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 cursor-pointer md:grid-cols-2 lg:grid-cols-4 gap-7 mx-3'>
        {doctorList.length > 0 ? doctorList.map((doctor, index) => (
          <div className='border-[1px] border-[#00342c] hover:border-[#81fbe8] transition-all ease-in-out rounded-xl p-4' key={index}>

            <Image className='h-[200px] w-full object-cover rounded-xl'
              src={doctor.attributes?.Image?.data?.[0].attributes?.url}
              alt='doctor'
              height={200}
              width={200} />

            <div className='flex flex-col'>
              <div className='flex flex-col items-baseline mt-3'>
                <h2 className='text-center text-white text-[15px] rounded-full px-2 py-0.5 bg-[#2691e3]'>{doctor.attributes?.categories?.data?.[0].attributes.Name}</h2>
                <h2 className='text-2xl font-bold text-white px-2 mt-1.5'>{doctor.attributes.Name}</h2>
                <div className='text-sm py-1 flex px-2'>
                  <h2 className='text-[16px] text-[#34beaa] font-bold'>{doctor.attributes.Year_of_Experience}Years</h2>
                </div>
                <h2 className='text-gray-500 text-sm px-2'>{doctor.attributes?.Address}</h2>
              </div>
              <Link href={'/details/'+doctor?.id}>
                <h2 className='p-2 px-3 border-[1px] mt-4 hover:bg-[#04b097] hover:text-white cursor-pointer hover:scale-105 transition-all ease-in-out text-[#04b097] rounded-full w-full text-center border-[#04b097]'>Book Now</h2>
              </Link>
            </div>

          </div>
        ))
          :
          // Skeleton Effect
          [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <div key={index} className='h-[220px] bg-[#1d2437] w-full rounded-lg animate-pulse'>

            </div>
          ))
        }
      </div>

    </div>
  )
}

export default DoctorList
