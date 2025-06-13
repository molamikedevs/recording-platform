import Header from '@/constants/Header'
import React from 'react'

const page =  async({params}: ParamsWithSearch) => {
    const { id } = await  params


  return (
    <div className='font-2xl font-karla'>
        <Header subHeader='molamikedevs@gmail.com' title='Kevin | Modevs' userImg='/assets/images/dummy.jpg' />

        User ID: {id}
        </div>
  )
}

export default page