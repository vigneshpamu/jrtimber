import React, { useState } from 'react'

const VideoSection = () => {
  const [active, setActive] = useState(false)
  return (
    <div
      className="main bg-mondo-200"
      style={{
        backgroundImage: 'url(/images/home/video/video.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div
        className={active ? 'btn active' : 'btn'}
        onClick={(val) => setActive(true)}
      >
        <div className="play"></div>
        <p>Play Video</p>
      </div>
      <div className={active ? 'clip active' : 'clip'}>
        <video src="/videos/wood.mp4" controls />
        <button className="close" onClick={(val) => setActive(false)}>
          Close
        </button>
      </div>
    </div>
  )
}

export default VideoSection
