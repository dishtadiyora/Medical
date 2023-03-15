import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './navbar.css'

export const SecondNav = () => {
    return (
        <>
            <div className='container-fulid px-5' style={{paddingTop:"70px",paddingBottom:"70px"}}>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-6 px-5 feacture-box1 d-flex '>
                        <div>
                            <img src='../asset/payment.png' alt=' not found'></img>
                        </div>
                        <div className='' style={{ paddingTop: "10px" }}>
                            <h3 style={{ color: "black", fontWeight: "bold" }}>Secure payment</h3>
                            <p className='pf' style={{ color: "gray" }}>All card accepted</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 px-5 d-flex feacture-box1'>
                        <div>
                            <img src='../asset/1.png' alt=' not found'></img>
                        </div>
                        <div className='' style={{ paddingTop: "10px" }}>
                            <h3 style={{ color: "black", fontWeight: "bold" }}>Free Shiping</h3>
                            <p className='pf' style={{ color: "gray" }}>On All Order</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 px-5 d-flex feacture-box1 '>
                        <div>
                            <img src='../asset/20.png' alt=' not found'></img>
                        </div>
                        <div className='' style={{ paddingTop: "10px" }}>
                            <h3 style={{ color: "black", fontWeight: "bold" }}>Online Support</h3>
                            <p className='pf' style={{ color: "gray" }}>Technical 24/7</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 px-5 d-flex '>
                        <div>
                            <img src='../asset/3.png' alt=' not found'></img>
                        </div>
                        <div className='' style={{ paddingTop: "10px" }}>
                            <h3 style={{ color: "black", fontWeight: "bold" }}>Big Saving</h3>
                            <p className='pf' style={{ color: "gray" }}>weekend Sales</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
