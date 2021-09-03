import React from 'react'
import HomeVideo from '../images/HomeVideo.mp4'
import {NavLink} from 'react-router-dom'

function VideoComp() {
    return (
        <div className='comp6_container videoComp m-auto'>
            <video src={HomeVideo} type="video/mp4" autoPlay muted loop className="myVideo" >
                Your browser does not support HTML5 video.
            </video>
            <div className='position-relative upprDiv'>
                <h1 className='text-white power display-5 mb-5'><span className='power'>Power Of </span> <span className='stroke'>TEN </span> <span className='power'> Consulting</span> </h1>
                <NavLink exact to='/' className="videoBtn " aria-current="page">Explore Here &gt; </NavLink>
            </div>
        </div>
    )
}

export default VideoComp
