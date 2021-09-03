import React from 'react'

function ContactUs() {
    return (
        <div className='contactComponent'>
            <h1 className='text-center ContactHeading my-5'>Co<span className='border-bottom border-dark border-3'>ntact</span> Us</h1>
            <div className='row'>
            <div className='col-sm-4 col-6 contactDiv'>
                <input className='inputField ps-1' type="text" name="name" id="name" placeholder='Name' /><br />
                <input className='inputField ps-1' type="email" name="email" id="email" placeholder='Email' /><br />
                <textarea className='inputField pt-2 ps-1 mb-0' name="msg" id="msg" placeholder='Add a Message' cols="30" rows="5"></textarea><br />
                <button className='contactBtn'>Submit</button>
            </div>
            <div className='col-3 ms-md-5 ms-3  pt-md-5 pt-3'>
                <p>Email: <br />hr.contact.ten@gmail.com</p>
                <p className='mt-5'>Phone:<br />+918595986120</p>
                <p className='mt-5'>Address: Delhi</p>
            </div>
            </div>
        </div>
    )
}

export default ContactUs
