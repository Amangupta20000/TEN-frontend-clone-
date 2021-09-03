import React from 'react'
import pic from '../images/HomeImg9.jpg'

function Testimonial() {
    return (
        <div className='testimonial'>
            <h1 className='text-danger testimonialHeading text-center'>Te<span className='border-bottom border-dark border-3'>stimonia</span>ls</h1>

            <div id="carouselExampleCaptions" className="carousel slide comp7_container " data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={pic} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-md-block">
                            <h5 className='carousalText'>Working with TEN is a great opportunity for the students who want to extend their career in digital marketing!</h5>
                            <h5 className='carousalText mt-5'>-Aakriti Malik, DM Intern</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={pic} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-md-block">
                            <h5 className='carousalText'>Working with TEN as a digital marketing intern has been a great experience. I learnt a lot of new stuff and worked on different tasks which helped me understand the marketing field better.​</h5>
                            <h5 className='carousalText mt-5'>  -Harsh Rajput, General Management Intern</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={pic} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-md-block">
                            <h5 className='carousalText'>TEN was my first ever experience into internship. Even though I didn't have much of an idea about my responsibilities, my mentors at TEN and fellow colleagues helped me a lot in making me understand my roles and were very cooperative throughout.</h5>
                            <h5 className='carousalText mt-5'>-Anjali Srivastava, Content Intern</h5>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Testimonial
