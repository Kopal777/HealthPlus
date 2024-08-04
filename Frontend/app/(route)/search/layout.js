import React from 'react'
import CategoryList from './_components/CategoryList'

function layout({children}) {
  return (
    <div className='grid grid-cols-4 px-20'>
      
      {/* Category */}
      <div className='hidden md:block'>
        <CategoryList/>
      </div>

      {/* Children */}
      <div className='col-span-3'>
        {children}
      </div>

    </div>
  )
}

export default layout
