import VideoCard from '@/components/VideoCard'
import { dummyCards } from '@/constants'
import Header from '@/constants/Header'
import React from 'react'

const Page = () => {
  return (
    <main className='wrapper page"'>
      <Header 
        title='All Videos'
        subHeader='Public Library'
        userImg='https://avatars.githubusercontent.com/u/100646626?v=4'
      /> 
      <section className='video-grid'>
      {dummyCards.map((card) => (
        <VideoCard
          {...card}
          visibility={card.visibility as Visibility}
          key={card.id}
        />
      ))}
        </section> 
    </main>
  )
}

export default Page