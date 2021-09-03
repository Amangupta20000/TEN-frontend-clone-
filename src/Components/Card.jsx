import React from 'react'


function Card(props) {
    console.log(props.value[0]);  
    return (
        <div className='col-4 mt-5 card' style={{ display: (props.price<props.value[0] || props.price>props.value[1]) ? "none" : "block" }}>
            
            <div className="card" >
            <img src={props.img} className="card-img-top courseImg mt-2" alt="..."/>
            <div className=' quikView'>
            <p className='text-center qvText'>Quick View</p>
            </div>
            <div className="card-body">
              <p className="card-text">{props.data}</p>
              <p className='text-success Amount'>₹ {props.price}.00</p>
            </div>
          </div>
        
          
    </div>
    )
}

export default Card
