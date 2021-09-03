import React from 'react'
// import HomeImg2 from './images/HomeImg2.webp'
import pic from "../images/HomeImg2.webp"

function Comp1() {
    return (
        <div className='comp1_container mx-auto'>
            <div className='bg-danger py-3'>
                <h4 className='text-center aboutUs'>About Us</h4>
                <div className='row'>
                    <div className='col-5 text-center'>
                        <h1 className=' learning  px-md-5 pt-5'>Learning Together From the Comfort of Your Home</h1>
                        <button type="submit" className='mb-5 LearnBtn'>Learn More</button>
                    </div>
                    <div className='col-5 text-center'>
                        <img className='img-fluid  m-5' src={pic} alt="..." />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Comp1
