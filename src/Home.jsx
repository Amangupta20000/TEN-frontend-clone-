import React from 'react'
import pic1 from './images/HomeImg1.png'
import Comp1 from './HomeComponents/Comp1'
import Comp3 from './HomeComponents/Comp3'
import Comp4 from './HomeComponents/Comp4'
import Comp5 from './HomeComponents/Comp5'
import Comp6 from './HomeComponents/Comp6'
import Testimonial from './HomeComponents/Testimonial'
import VideoComp from './HomeComponents/VideoComp'

function Home() {
    return (
        <React.Fragment>
        <div className='comp1_container mx-auto'>
            <div className='text-center'>
                <img className='homeImg img-fluid' src={pic1} alt="..." />
            </div>
            </div>
            <Comp1 />
            <Comp3 />
            <Comp4 />
            <Comp5 />
            <Comp6 />
            <Testimonial />
            <VideoComp />
        </React.Fragment>
    )
}

export default Home
