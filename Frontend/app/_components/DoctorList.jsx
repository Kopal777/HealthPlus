import GlobalApi from '@/_utils/GlobalApi'
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const DoctorList = () => {

  const [doctorList, setDoctorList] = useState([]);
  useEffect(() => {
    getDoctorList();
  }, [])

  const getDoctorList = () => {
    GlobalApi.getDoctorList().then(resp => {
      setDoctorList(resp.data.data);
      // console.log(resp.data.data[0].attributes.about);
    })
  }

  return (
    <div className='mb-20 md:px-20'>
      <h2 className='font-bold text-4xl text-white m-4 p-2'> Popular Doctors</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 cursor-pointer md:grid-cols-2 lg:grid-cols-4 gap-7 mx-3'>
        {doctorList.length>0 ? doctorList.map((doctor, index) => (
          <div className='border-[1px] border-[#00342c] hover:border-[#81fbe8] transition-all ease-in-out rounded-xl p-4' key={index}>

            <Image className='h-[200px] w-full object-cover rounded-xl'
              src={doctor.attributes?.Image?.data?.[0].attributes?.url}
              alt='doctor'
              height={200}
              width={200} />

            <div className='flex flex-col justify-around'>
              <div className='flex flex-col items-baseline mt-3'>
                <h2 className='text-center text-white text-[15px] rounded-full px-2 py-0.5 bg-[#2691e3]'>{doctor.attributes?.categories?.data?.[0].attributes.Name}</h2>
                <h2 className='text-2xl font-bold text-white px-2 mt-1.5'>{doctor.attributes.Name}</h2>
                <h2 className='text-sm text-gray-500 px-2'>{doctor.attributes.Year_of_Experience} Years of Experience</h2>
                <h2 className='text-gray-500 text-sm px-2'>{doctor.attributes?.Address}</h2>
              </div>
              <div>
                <h2 className='p-2 px-3 border-[1px] mt-4 hover:bg-[#04b097] hover:text-white cursor-pointer hover:scale-105 transition-all ease-in-out text-[#04b097] rounded-full w-full text-center border-[#04b097]'>Book Now</h2>
              </div>
            </div>

          </div>
        )) 
        :
        // Skeleton Effect
        [1,2,3,4,5,6,7,8].map((item, index)=>(
        <div key={index} className='h-[220px] bg-[#1d2437] w-full rounded-lg animate-pulse'>
           
        </div>
        ))
      }
      </div>

    </div>
  )
}

export default DoctorList
