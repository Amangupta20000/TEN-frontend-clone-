import React from 'react'
import { NavLink } from 'react-router-dom'

function Comp5() {
    return (
        <div className='comp2_container mx-auto'>
            <div className='row'>
                <div className='col-6 backgroundColor'>
                    <h1 className='text-center fun text-white mt-5 mb-4'>Product Management <br /> like a pro</h1>
                    <NavLink exact to='/' className="exploreBtn centerbtn" aria-current="page">Explore Here</NavLink>
                </div>
                <div className='col-6 comp5BackImg'>
                </div>
            </div>
        </div>
    )
}

export default Comp5
