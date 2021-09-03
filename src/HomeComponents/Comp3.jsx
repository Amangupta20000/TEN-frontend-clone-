import React from 'react'
import { NavLink } from 'react-router-dom'


function Comp3() {
    return (
        <div className='comp2_container mt-5 mx-auto'>
            <div className='row'>
                <div className='col-8 p-5 backgroundImg'>
                    <NavLink exact to='/' className="nav-link active ms-md-5 ps-5 display-6" aria-current="page">Our Courses </NavLink>
                    <h1 className='p-5 ms-lg-5 journey'> Your New <br />Journey Begins Here, Today</h1>
                </div>
                <div className='col-4 p-md-5 backgroundColor'>
                    <h1 className='text-center fun text-white mb-5'>Entrepreneurship made fun</h1>
                    <NavLink exact to='/' className="exploreBtn" aria-current="page">Explore Here</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Comp3
