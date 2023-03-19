import React from 'react'
import '../Styles/Home.css'
import HomeVideo from '../Assets/Home-Video.mp4'
function Home() {
  return (
    <div>
      <div class="bg-video-wrap">
        <video className="video" autoPlay muted loop>
          <source src={HomeVideo} />
        </video>
        <div class="overlay">
          <h1 className='heading-text display-1'>Build Your Resume In Short Time
          </h1>
        </div>
        
      </div>
    </div>
  )
}

export default Home