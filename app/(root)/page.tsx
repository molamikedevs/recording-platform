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
      <h1>Welcome DoRecorder</h1>
    </main>
  )
}

export default Page