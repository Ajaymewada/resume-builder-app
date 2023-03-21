import React from 'react'
import '../Styles/Home.css'
import HomeVideo from '../Assets/Home-Video.mp4'
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div>
      <div className="bg-video-wrap">
        <video className="video" autoPlay muted loop>
          <source src={HomeVideo} />
        </video>
        <div className="overlay">
          <div className='row justify-content-center mt-5 pt-5'>
             <div className="col-lg-5">
              <h1 className='heading-text display-2'>Build Your <span className='resumeText'>Resume</span> In Short Time
              </h1>
             </div>
          </div>
          <div className='row justify-content-center'>
            <div className="col-lg-4 d-flex justify-content-center">
              <Link className='btn primary-btn px-5 mt-4 py-2 fs-20px shadow-none' to='/build'>Build</Link>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Home