import React from 'react'
import './featured.css'

const FeaturedPro = (props) => {
    return (
        <div className='col-md-3'>
            <div className="card " style={{ width: "95%" }}>
                <img src={props.img} className="card-img-top" alt=" not found" style={{ height: "380px" }} />
                <div className="card-body" style={{ textAlign: "center" }}>
                    <p className="card-title" style={{ color: "gray", fontWeight: "bold" }}>{props.heading}</p>
                    <h5 className="card-text" style={{ color: "black", fontWeight: "bold" }}>{props.text}</h5>
                    <h4 style={{ color: "skyblue", fontWeight: "bold" }}>{props.price}</h4>
                </div>
            </div>
        </div>
    )
}

export default FeaturedPro
