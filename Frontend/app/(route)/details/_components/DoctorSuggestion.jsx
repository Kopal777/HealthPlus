import GlobalApi from '@/_utils/GlobalApi'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function DoctorSuggestion() {

    const [doctorList, setDoctorList] = useState([]);

    useEffect(() => {
        getDoctorList();
    })
    const getDoctorList = () => {
        GlobalApi.getDoctorList().then(resp => {
            console.log("Thisone", resp.data.data);
            setDoctorList(resp.data.data);
        })
    }
    return (
        <div className='border-[1px] border-gray-800 ml-2 p-5 mt-5 rounded-lg'>
            <h2 className='font-bold'>Suggestions</h2>
            {doctorList.map((doctor, index) => (
                <div>
                    <div className='my-10 flex items-center'>
                        <Link href={'/details/'+ doctor.id}>
                            <Image className='rounded-full cursor-pointer'
                                src={doctor.attributes?.Image?.data?.[0].attributes?.url}
                                alt='doctor'
                                width={100}
                                height={90} />
                        </Link>
                        <div className='ml-4 flex flex-col gap-2'>
                            <span  className='bg-[#656565] text-[10px] text-[#14edcc] w-fit px-2 py-1 rounded-full'>
                                {doctor.attributes.categories.data[0].attributes.Name}
                            </span>
                            <Link href={'/details/'+ doctor.id} className='text-white font-bold text-[12px] cursor-pointer hover:underline'>
                                {doctor.attributes?.Name}
                            </Link>
                            <span className='text-[12px] text-[#14edcc]'>
                                {doctor.attributes.Year_of_Experience} of experience
                            </span>
                        </div>
                    </div>
                    <div className='border-gray-800 border-[1px]'></div>
                </div>
            ))}
        </div>
    )
}

export default DoctorSuggestion
