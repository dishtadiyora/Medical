import React from 'react'
import '../home/home.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Maincontent } from '../maincontent/Maincontent';
import { MainFeaturedpro } from '../featuredproduct/MainFeaturedpro';
import { Mainseller } from '../seller/Mainseller';
import { SecondNav } from '../secondnavbar/SecondNav';
import { Sechm } from '../sechm/Sechm';
import { Footer } from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';


const Home = () => {
    return (
        <>
        <Sidebar/>
            <div className='container-fulid mx-5'>
                <div className='row'>
                    <div className='home'>
                        <div className='maindata' style={{ height: "80vh" }}>
                            <div className='maincontent'>
                                <h4>Home Medical Supplies</h4>
                                <h1>Fast Reading Digital Thermometer For Ear & Forehead</h1>
                                <p>but I must explained to you how all this mistakes idea <br /> of denouncing pleasure and praising pain</p>
                                <button className='shopbtn'>shop Now</button>
                                <button className='aboutbtn'>about us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <Maincontent />
            <div className='featuredpro'>
            <div className='container-fulid mx-5'>
                    <div className='row'>
                        <div className='menue' style={{display: "flex",justifyContent: "space-between" }}>
                            <div className="topnav" style={{ paddingTop: "50px", fontWeight: "bolder", paddingBottom: "20px" }}>
                                <h1>Featured Product</h1>
                            </div>
                            <div className="topnav-right" style={{ paddingTop: "50px", paddingBottom: "20px"}}>
                                <ul className='secondnav' >
                                    <li className='mx-2'style={{listStyle:"none"}}>All</li>
                                    <li  className='mx-2'style={{listStyle:"none"}}>Baby Care</li>
                                    <li  className='mx-2'style={{listStyle:"none"}}>Beverages</li>
                                    <li  className='mx-2'style={{listStyle:"none"}}>Medical</li>
                                    <li  className='mx-2'style={{listStyle:"none"}}>Supplies</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <MainFeaturedpro />
            </div>
            <div className='container-fulid mx-5'>
                <div className='divimg row' style={{ paddingTop: "50px"}}>
                  
                    <div className='col-md-7'>
                        <div className='botalfresss' style={{ display: "flex" }}>
                            <div className='firstbotal' style={{paddingBottom:"20px"}}>
                                <p>Home Medical Supplies</p>
                                <h4> CORONA COVID-19</h4>
                                <p style={{ color: "orangered", fontSize: "20px" }}>PREVENTION&CARE SUPPLIES</p>
                                <button className='sbtn'>Shop Now</button>
                            </div>
                            <div className='secondbotalss'>
                                <img className='asd img-fulid' src='../asset/52.png' alt=' not found' ></img>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5'>
                        <div className='botalfress' style={{ display: "flex",paddingBottom:"20px"}}>
                            <div className='firstbotal' >
                                <p>Home Medical Supplies</p>
                                <h4 >Home Medical</h4>
                                <p style={{ color: "orangered", fontSize: "20px" }}>$45.00-$55.00</p>
                                <button className='sbtn'>Shop Now</button>
                            </div>
                            <div className='secondbotals'>
                                <img className='asd img-fulid' src='../asset/a2.png' alt=' not found' ></img>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
            <div className='container-fulid mx-5'>
                <div className='row'>
                    <div className='rew' style={{ display: "flex", paddingTop: "50px", paddingBottom: "20px", justifyContent: "space-between" }}>
                        <div className=''>
                            <h1>Best Seller Products</h1>
                        </div>
                        <div className='buttn'>
                            <button className='sbtn'>view All</button>
                        </div>
                    </div>
                    <Mainseller />
                </div>
            </div>     
                   <SecondNav />
                    <Sechm />      
                <Footer />
        </>
    )
}

export default Home
