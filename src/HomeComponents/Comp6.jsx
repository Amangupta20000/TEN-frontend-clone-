import React from 'react'
import pic from '../images/HomeImg7.png'
import pic2 from '../images/HomeImg8.png'

function Comp6() {
    return (
        <div>
            <div className='text-center ribbon'>
                <img className='CourseRibbon mb-3' src={pic} alt="..." />
                <img src={pic2} className='CourseRibbon' alt="..." />
            </div>
            <div className='comp6_container mx-auto bg-light'>
                <div className='row'>
                    <div className='col-4'>
                        <p className='text-center paraResponsive paraMargins '>Our instructors are more adept at monitoring student problems and assessing their level of understanding and progress, and they provide much more relevant, useful feedback.
                            We are experts in developing and testing hypotheses about learning difficulties or instructional strategies.</p>
                    </div>
                    <div className='col-4'>
                        <p className='text-center paraResponsive paraMargins '>Feel like home, with a "family of invisible friends".</p>
                    </div>
                    <div className='col-4'>
                        <p className='text-center paraResponsive paraMargins   pb-4'>Our expert teachers design and curate the curriculum using best practices and careful consideration of how people learn and retain information with the ongoing tech trends in the professional domain. We've debated every facet of our methodology, from the order in which to teach concepts, the analogies used to clarify them and how exercises should be structured to deliver the maximum educational punch.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Comp6
