import React from 'react'
import './Video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommended from '../../Components/Recommended/Recommended'


const Video = () => {

  const {videoId,categoryId} = useParems();
  return (
    <div>
        <div className="play-container">
             <PlayVideo videoId={videoId}/>
             <Recommended/>
        </div>
        
    </div>
  )
}

export default Video