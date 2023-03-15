import React from 'react'
import './blog.css'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export const Blog = () => {
    return (
        <>
            <div className='container-fulid mx-5'>
                <div className='row'>
                    <div className='ma' style={{ display: "flex", gap: "50px" }}>
                        <div className='col-md-5'>
                            <div className='blogfirst' style={{ display: "flex" }}>
                                <div className='' style={{ paddingBottom: "10px" }}>
                                    <img className='qwe' src='../asset/12.webp' alt='image does not found'></img>
                                </div>
                                <div className='' style={{ paddingLeft: "15px", paddingTop: "25px" }}>
                                    <h4 style={{ fontSize: "18px", color: "gray" }}>December 27,2020</h4>
                                    <h7 style={{ fontWeight: "bold", fontSize: "20px" }}>Xiaomi Posts Slowest Ever Revenue-Growth in Third Quater</h7>
                                </div>
                            </div>
                            <div className='blogfirst' style={{ display: "flex" }}>
                                <div className='' >
                                    <img className='qwe' src='../asset/kitchan2.jpg' alt='image does not found'></img>
                                </div>
                                <div className='' style={{ paddingLeft: "15px", paddingTop: "25px" }}>
                                    <h4 style={{ fontSize: "18px", color: "gray" }}>December 27,2020</h4>
                                    <h7 style={{ fontWeight: "bold", fontSize: "20px" }}>WhatsApp Shared 'Technical jargon' with Govt Agency,Didn't</h7>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='secondblog px-5 py-5'>
                                <div className='' style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div className='float-left'>
                                        <h1 style={{ fontSize: "30px", fontWeight: "800" }}>Good Customer Service</h1>
                                    </div>
                                    <div className='float-right'>
                                        <FormatQuoteIcon />
                                    </div>
                                </div>
                                <p style={{ fontSize: "18px" }}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                                <div className='sa' style={{ display: "flex", paddingTop: "20px" }}>
                                    <div>
                                        <img className='pimg' src='../asset/person.jpg' alt='image does not found'></img>
                                    </div>
                                    <div className='' style={{ padding: "20px" }} >
                                        <h1 style={{ fontSize: "20px" }}>Samanta Willaian</h1>
                                        <p style={{ fontSize: "15px" }}>Home Cleaning</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
