import React from 'react'
import './seller.css'

export const Seller = (props) => {
  return (
    <>
   <div className='col-md-3'>
   <div className="card " style={{ width: "90%"}}>
                <img src={props.img} className="card-img-top" alt="image not found" />
                <div className="card-body" style={{ textAlign: "center" }}>
                    <p className="card-title" style={{ color: "gray", fontWeight: "bold" }}>{props.heading}</p>
                    <h5 className="card-text" style={{ color: "black", fontWeight: "bold" }}>{props.text}</h5>
                    <h4 style={{ color: "skyblue", fontWeight: "bold" }}>{props.price}</h4>
                </div>
            </div>

   </div>
         

    </>
  )
}
