'use client'

import Image from 'next/image'
import { useState } from 'react'

const DropdownList = () => {
  const [open, setOpen] = useState(false)


  return (
    <div className='relative'>
      <div className='cursor-pointer' onClick={() => setOpen(prevState => !prevState)}>
        <div className='filter-trigger'>
          <figure>
            <Image src='/assets/icons/hamburger.svg' alt='menu' width={14} height={14} />
              Most Recent
          </figure> 
           <Image src='/assets/icons/arrow-down.svg' alt='arrow down' width={14} height={14} />
        </div>
      </div>

      {open && (
          <ul className='dropdown'>
          {['Most Recent', 'Most Popular'].map((option) => (
            <li key={option} className='list-item'>{option}</li>
          ))}
          </ul>
       
      )}
    </div>
  )
}

export default DropdownList