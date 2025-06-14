import VideoCard from '@/components/VideoCard'
import { dummyCards } from '@/constants'
import Header from '@/constants/Header'
import React from 'react'

const page =  async({params}: ParamsWithSearch) => {
    const { id } = await  params


  return (
    <div className='font-2xl font-karla'>
        <Header subHeader='molamikedevs@gmail.com' title='Kevin | Modevs' userImg='/assets/images/dummy.jpg' />
        <section className='video-grid'>
          {dummyCards.map((card) => (
         <VideoCard
          {...card}
              visibility={card.visibility as Visibility}
              key={card.id}
             />
          ))}
        </section>

        </div>
  )
}

export default page