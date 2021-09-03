import React from 'react'
import { NavLink } from 'react-router-dom'

function Comp4() {
    return (

        <div className='comp2_container mx-auto'>
            <div className='row'>
                <div className='col-6 Comp4BackImg'>
                </div>
                <div className='col-3 backgroundColor'>
                    <h1 className='text-center text-white fun mt-5 mb-4'>Digital Marketing</h1>
                    <NavLink exact to='/' className="exploreBtn" aria-current="page">Explore Here</NavLink>
                </div>
                <div className='col-3 Comp4BackImg2'>
                </div>
            </div>
        </div>
    )
}

export default Comp4
