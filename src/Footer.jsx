import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import Insta from './images/Insta.webp'


function Footer() {
    return (
        <React.Fragment>
            <div className='container-fluid footerComponent'>
                <div className='row'>
                    <div className='col-4 bg-light'>
                        <div className='footerIcons'>
                            <a href="https://www.facebook.com/The-Entrepreneurship-Network-105155667888383/" target="_blank" rel="noopener noreferrer"><AiFillFacebook className="facebook" /></a>
                            <a href="https://twitter.com/We_Are_TEN?s=08" target="_blank" rel="noopener noreferrer"><AiOutlineTwitter className='twitter' /></a>
                            <a href="https://www.instagram.com/theentrepreneurshipnetwork/" className='instagram' target="_blank" rel="noopener noreferrer"> <img src={Insta} className='Insta' alt="" /></a>
                        </div>
                    </div>

                    <div className='col-4 bg-light text-center'>
                        <h5 className='text-center Newsletter mt-2'>Subscribe to our newsletter</h5>
                        <input type="text" placeholder='Full Name' className='Name' name="" />
                        <input type="text" placeholder='College Name' className='Name ms-2' name="" />
                        <input type="number" placeholder='Mobile No.' className='Name ' name="" />
                        <input type="email" placeholder='Email' className='Name ms-2' name="" /><br />
                        <label htmlFor="community"><input className='me-3 mt-2' type="checkbox" id="community" name="community" value="Bike" />
                            Join TEN's Discord Community Today</label><br />
                        <button type="submit" className='mt-1'>Submit</button>
                    </div>
                    <div className='col-4 bg-light text-center'>
                        <NavLink exact to='/' className="nav-link footerLink active mt-5" aria-current="page" >About Us </NavLink>
                        <NavLink exact to='/' className="nav-link footerLink " aria-current="page" >FAQ's </NavLink>
                        <NavLink exact to='/contact' className="nav-link footerLink " aria-current="page" >Contact Us </NavLink>
                    </div>
                </div>
            </div>
            <div className='footer text-center'>
                <h3 className='footerFontSize'>© 2020 Limitless Technologies - The Entrepreneurship Network</h3>
            </div>
        </React.Fragment>
    )
}

export default Footer
