import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import logo from './images/titleImg.webp'
import { NavLink } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';


function Navbar() {
    return (
        <React.Fragment>
            <div className='container navBar'>
                <div className='row'>
                    <div className='Header ms-sm-5 ms-1 mt-1 ps-sm-5 ps-3 col-4'>
                        <h1 className='text-danger font-italic heading'><span className='text-dark'>T</span>he <span className='text-dark'>E</span>ntrepreneurship <span className='text-dark'>N</span>etwork</h1>
                        <div className='logoImg'>
                            <img className='logo' src={logo} alt="..." />
                        </div>
                    </div>
                    <div className='col-sm-4 col-5 ms-auto'>
                        <div className='ms-auto'>
                            <NavLink to='/' className='CartButton ms-lg-5 me-5 '><AiOutlineShoppingCart /></NavLink>
                            <NavLink to='/' className='loginButton '><FaUserCircle /> Log In</NavLink>
                        </div>

                        <form className="form-inline searchForm">
                            <input className=" mr-sm-2 inputSearch" autoComplete='off' type="search" placeholder="Search Here..." aria-label="Search" />
                            <button className="SubmitBtn my-2 my-sm-0" type="submit"><BsSearch /></button>
                        </form>
                    </div>
                </div>

                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-lg-auto mb-2 mb-lg-0 ">
                                <li className="nav-item">
                                    <NavLink exact activeClassName="menu_active" to='/TEN-frontend-clone-/' className="nav-link active" aria-current="page" >Home <span className='ms-sm-4 me-sm-4 ms-3 me-3'>|</span> </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact activeClassName="menu_active" to='/onlinecourse' className="nav-link" > Online Courses <span className='ms-sm-4 me-sm-4 ms-3 me-3'>|</span> </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact activeClassName="menu_active" to='/hiring' className="nav-link" > We'r Hiring <span className='ms-sm-4 me-sm-4 ms-3 me-3'>|</span> </NavLink>
                                </li>
                                <li className="nav-item  me-sm-5">
                                    <NavLink exact activeClassName="menu_active" to='/more' className="nav-link dropdown-toggle me-sm-5" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        More
                                    </NavLink>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><NavLink to='' className="dropdown" >Blog</NavLink></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><NavLink to='' className="dropdown" >Certification</NavLink></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><NavLink to='' className="dropdown" >Alumini Team</NavLink></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><NavLink to='' className="dropdown" >Forum</NavLink></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><NavLink to='' className="dropdown" >Hackathon</NavLink></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><NavLink to='' className="dropdown" >Membership Registration</NavLink></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><NavLink to='' className="dropdown" >Campus Ambassador Program</NavLink></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><NavLink to='' className="dropdown" >Mentorship</NavLink></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><NavLink to='' className="dropdown" >Social Media</NavLink></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><NavLink to='/testimonials' className="dropdown" >Testimonials</NavLink></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><NavLink to='/contact' className="dropdown" >Contact Us</NavLink></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><NavLink to='/complaints' className="dropdown" >Complaints</NavLink></li>
                                    </ul>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    )
}

export default Navbar
