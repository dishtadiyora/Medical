import React from 'react'
import Sidebar from '../../componment/sidebar/Sidebar'
import './product.css'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Sechm } from '../../componment/sechm/Sechm';
import { Footer } from '../../componment/footer/Footer';
import { MainFeaturedpros } from '../../componment/featuredproducts/MainFeaturedpros'
import Gallery from '../../componment/Gallery/Gallery';
import Decription from '../../componment/decsription/Decription';

const Product = () => {
    return (
        <>
            <Sidebar />
            <div className='container-fulid mx-5'>
                <div className='row'>
                    <div className='col-md-6' style={{paddingBottom:"80px"}}>
                        <Gallery/>
                    </div>
                    <div className='col-md-6'>
                        <div className='b' style={{ display: "flex" }}>
                            <div className=''>
                                <h5 >
                                    <i style={{ color: "orange" }} class="fa-solid fa-star"></i>
                                    <i style={{ color: "orange" }} class="fa-solid fa-star"></i>
                                    <i style={{ color: "orange" }} class="fa-solid fa-star"></i>
                                    <i style={{ color: "orange" }} class="fa-solid fa-star"></i>
                                    <i style={{ color: "gray" }} class="fa-solid fa-star"></i>
                                </h5>
                            </div>
                            <div>
                                <p>(9 customer rreviews)</p>
                            </div>
                        </div>
                        <h3 className='c' style={{ fontWeight: "bold", paddingLeft: "20px" }}>Anti-Septic Dry Hand Gel</h3>
                        <h2 className='d' style={{ color: "skyblue", fontWeight: "bold", fontSize: "30px", paddingLeft: "20px", paddingTop: "30px" }}>$12.00</h2>
                        <p className='e' style={{ color: "gray", paddingLeft: "20px", paddingTop: "30px" }}>This NoiseStorm font is inspired by Classic Retro and Vintage apparel, headlines, signage, logo, quote, apparel and other creative applications. </p>
                        <div className='f' style={{ paddingTop: "40px", paddingLeft: "20px" }}>
                            <button className='f1' style={{ backgroundColor: "skyblue", color: 'white', border: "none", borderRadius: "30px", padding: "15px" }}>Add to Cart <WorkOutlineIcon /></button>
                        </div>

                        <div className='g' style={{ display: "flex", paddingTop: "40px", paddingLeft: "20px" }}>
                            <div>   <button className='g1' style={{ backgroundColor: "white", color: 'black', border: "1px solid black", borderRadius: "30px", padding: "15px" }}>add to WishList <FavoriteBorderIcon /></button></div>
                            <div style={{ paddingTop: '14px', paddingLeft: "20px" }}>
                                share <ShareIcon />
                            </div>
                        </div>
                        <div className='h' style={{ display: "flex", gap: "50px", paddingLeft: "20px", paddingTop: '50px' }}>
                            <div style={{ fontWeight: "bold", color: "black" }}>Categories</div>
                            <div style={{ color: "gray" }}>Accessories,Medical</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{paddingTop:"50px"}}>
            <Decription/>
            </div>
            <div className='container-fulid mx-5'>
                <div className='row'>
                    <h1 style={{ textAlign: 'center', padding: "50px 0px 0px 0px" }}>Related Products</h1>
                </div>
                <MainFeaturedpros />
            </div>
            <div>
                <Sechm />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default Product