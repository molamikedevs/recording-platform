import React from 'react'

const VideoDetails = async ({params}: Params) => {
    const {videoId} = await params
  return (
    <div>VideoDetails: {videoId}</div>
  )
}

export default VideoDetails