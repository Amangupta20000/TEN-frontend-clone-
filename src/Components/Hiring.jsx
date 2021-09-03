import React from 'react'
import pic from '../images/HiringImg2.webp'

function Hiring() {
    return (
        <div className='Hiring_container backgroundImgHiring text-white'>
            <div className='bg'>
                <h2 className='text-center pt-4'>We Are Hiring Interns</h2>
                <h5 className='py-4 hiringText'>The Student Intern program is a structured and guided work-based learning program for students currently enrolled in India.<br/><br/> There is a small registration fee, INR 100 /- (RUPEES ONE HUNDRED ONLY) applicable to all incoming interns  as part of this One-of-a-Kind Point based Program. This is required not just to ensure a seamless on-boarding and exit process but also to supply the interns with relevant study material and make them aware of how a corporate setup works.</h5>
                <div className='row'>
                    <div className='col-7'>
                        <h5 className='hiringText'><b>Scan the QR code to complete your payment and submit the below
                        application form to start with your registration process.</b></h5><br />
                        <h5 className='hiringText'>Please keep the payment transaction ID handy for submittingthe form.</h5><br />
                        <h5 className='hiringText'>Note: This internship does not offer an opportunity to earn money,rather helps an individual grow by working on the job and earn a certificate upon successful completion.</h5><br/>
                        <h5 className='hiringText'>Check out few of our open internship positions below  Refer the application form for more open positions</h5><br />
                        <h5 className='hiringText'><b>Digital Marketing Interns</b></h5><br />   
                        <h5 className='hiringText'><b>General Management Interns</b></h5><br />
                        <h5 className='hiringText'><b>Technical/Software Experts</b></h5><br />
                        <h5 className='hiringText'><b>Product Management Interns</b></h5><br />
                        <h5 className='hiringText'><b>Content Interns and more...</b></h5><br />
                    </div>
                    <div className='col-5'>
                        <img src={pic} className='hiringImg' alt="..." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hiring
