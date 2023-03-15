import React from 'react'
import '../sidebar/sidebar.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <div className='container-fulid mx-5'>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href='/'>
                        <img src='../asset/logos.png' alt=' not found' />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ gap: "500px", display: "flex", justifyContent: "space-between" }}>
                        <ul className="navbar-nav mr-auto" style={{ color: "balck", fontWeight: "bold", float: "left" }}>
                            <li className="nav-item">
                                <a className="nav-link" href="/">HOME</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="/about">ABOUT</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="/shop">SHOP</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="/contact">CONTACT</a>
                            </li>
                        </ul>
                        <div className='main' style={{ display: "flex", gap: "20px", float: "right" }}>
                            <div class="search-container" style={{backgroundColor:"lightgray"}}>
                                
                                    <input type="text" placeholder="Search.." name="search" style={{backgroundColor:"lightgray" ,height:"40px",border:"none",borderRadius:"8px 0px 0px 8px"}}/>
                                        <button type="submit" style={{border:"none",height:"40px",backgroundColor:"lightgray"}}><i class="fa fa-search"></i></button>
                            
                            </div>
                            <div className="icon" style={{ paddingTop: "3px", color: "black" }}><NavLink to='/login'><PersonIcon /></NavLink></div>
                            <div className="icon" style={{ paddingTop: "3px" }}><WorkOutlineIcon /></div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Sidebar
