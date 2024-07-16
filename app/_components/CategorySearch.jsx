import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from 'next/image'
import { Search } from 'lucide-react'

const CategorySearch = () => {
  return (
    <div className='text-white flex flex-col items-center my-10'>
      <h2 className='font-bold text-4xl tracking-wide mb-3'>Search <span className='text-primary'>Doctors</span>
      </h2>
      <h2 className='text-gray-500 text-xl mb-4'>Search your Doctor and Book an  Appointment</h2>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Search" />
        <Button type="submit">
          {/* Search component from Lucid React */}
          <Search height={18}/> Search
        </Button>
      </div>
    </div>
  )
}

export default CategorySearch
