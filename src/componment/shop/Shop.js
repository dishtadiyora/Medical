import React from 'react'
import './shop.css'
import { NavLink } from 'react-router-dom'
import { Sechm } from '../sechm/Sechm'
import { Footer } from '../footer/Footer'
import { MainFeaturedpros } from '../featuredproducts/MainFeaturedpros'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../sidebar/Sidebar'
const Shop = () => {
    return (
        <>
            <Sidebar />
            <div className='container-fulid mx-5'>
                <div className='row' style={{ paddingTop: "30px" }}>
                    <div className='blog'>
                        <div className='blogesss'>
                            <h1>Products</h1>
                            <h3>    <NavLink to="/" style={{ color: "black", textDecoration: "none" }}>Home</NavLink> / About</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fulid mx-5'>
                <div className='row' style={{ paddingTop: "20px" }}>
                    <div className='col-md-4'>
                        <h4>Category</h4>
                        <div className='category'>
                            <div className='' style={{ justifyContent: "space-between", display: "flex" }}>
                                <div className=''>
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label>Accessories</label>
                                </div>
                                <p>(1)</p>
                            </div>
                            <div className='' style={{ justifyContent: "space-between", display: "flex" }}>
                                <div className=''>
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label>Baby care</label>
                                </div>
                                <p>(1)</p>
                            </div>
                            <div className='' style={{ justifyContent: "space-between", display: "flex" }}>
                                <div className=''>
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label>care hospital</label>
                                </div>
                                <p>(2)</p>
                            </div>
                            <div className='' style={{ justifyContent: "space-between", display: "flex" }}>
                                <div className=''>
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label>care supplies</label>
                                </div>
                                <p>(1)</p>
                            </div>
                            <div className='' style={{ justifyContent: "space-between", display: "flex" }}>
                                <div className=''>
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label>cleaning & household</label>
                                </div>
                                <p>(1)</p>
                            </div>
                            <div className='' style={{ justifyContent: "space-between", display: "flex" }}>
                                <div className=''>
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label>Hospital Equipment</label>
                                </div>
                                <p>(1)</p>
                            </div>
                            <div className='' style={{ justifyContent: "space-between", display: "flex" }}>
                                <div className=''>
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label>Medical</label>
                                </div>
                                <p>(2)</p>
                            </div>
                            <div className='' style={{ justifyContent: "space-between", display: "flex" }}>
                                <div className=''>
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label>personal</label>
                                </div>
                                <p>(5)</p>
                            </div>
                            <div className='' style={{ justifyContent: "space-between", display: "flex" }}>
                                <div className=''>
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label>Pharmacy</label>
                                </div>
                                <p>(1)</p>
                            </div>
                            <div className='' style={{ justifyContent: "space-between", display: "flex" }}>
                                <div className=''>
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label>supplies</label>
                                </div>
                                <p>(1)</p>
                            </div>
                        </div>
                        <hr></hr>
                        <h4>Brand</h4>
                        <div className='category'>
                            <div className='' style={{ justifyContent: "space-between", display: "flex" }}>
                                <div className=''>
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label>cheetos</label>
                                </div>
                                <p>(6)</p>
                            </div>
                            <div className='' style={{ justifyContent: "space-between", display: "flex" }}>
                                <div className=''>
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label>lays</label>
                                </div>
                                <p>(3)</p>
                            </div>
                            <div className='' style={{ justifyContent: "space-between", display: "flex" }}>
                                <div className=''>
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label>Nescafe</label>
                                </div>
                                <p>(4)</p>
                            </div>
                        </div>
                        <hr></hr>
                        <h4>Price Range</h4>
                        <label class="form-label" for="customRange1">Example range</label>
                        <div class="range">
                            <input type="range" class="form-range" id="customRange1"  style={{color:"blue"}}/ >
                        </div>
                        <button className='btn' style={{ width: "100%", borderRadius: "50px" }}>Filter</button>
                    </div>
                    <div className='col-md-8'>
                        <div className='featuredpro'>
                            <div className='container-fulid mx-5'>
                                <div className='row'>
                                    <div className='menue' style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div className="topnav" style={{ paddingTop: "50px", fontWeight: "bolder", paddingBottom: "20px" }}>
                                            <h1>Featured Product</h1>
                                        </div>
                                        <div className="topnav-right" style={{ paddingTop: "50px", paddingBottom: "20px" }}>
                                            <div className="dropdown">
                                                <button style={{ borderRedius: "100px" }} className='btns' type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Sort By:Default
                                                </button>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label>Default</label>
                                                    <br />
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label>Popularity</label>
                                                    <br />
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label>Rating</label>
                                                    <br />
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label>Newness</label>
                                                    <br />
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label> Low price</label>
                                                    <br />
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label>High price</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <MainFeaturedpros />
                        </div>
                    </div>
                </div>
            </div>
            <Sechm />
            <Footer />
        </>
    )
}

export default Shop