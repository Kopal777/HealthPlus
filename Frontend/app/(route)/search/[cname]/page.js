"use client"
import React, { useEffect } from 'react'

function Search({params}) {
  useEffect(()=>{
    console.log(params.cname);
  },[])
  return (
    <div className='text-white'>
      Search me up
    </div>
  )
}

export default Search
