"use client"
import GlobalApi from '@/_utils/GlobalApi';
import DoctorList from '@/app/_components/DoctorList';
import React, { useEffect, useState } from 'react'

function Search({params}) {

  const [doctorList, setDoctorList] = useState([]);
  useEffect(()=>{
    console.log(params.cname);
    getDoctors();
  },[])

  const getDoctors=()=>{
    GlobalApi.getDoctorByCategory(params.cname).then(response=>{
      setDoctorList(response.data.data);
    });
  }
  return (
    <div className='text-white mt-5'>
      <DoctorList heading={params.cname}
      doctorList={doctorList}/>
    </div>
  )
}

export default Search
