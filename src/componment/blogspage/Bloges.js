import React from 'react'
import './bloges.css'
import { NavLink } from 'react-router-dom'
import { MainBlogs } from '../blogs/MainBlogs'
import { Sechm } from '../sechm/Sechm'
import { Footer } from '../footer/Footer'
import Sidebar from '../sidebar/Sidebar'

const Bloges = () => {
  return (
    <>
    <Sidebar/>
      <div className='container-fulid mx-5'>
        <div className='row' style={{ paddingTop: "30px" }}>
          <div className='bloges'>
            <div className='blogess'>
              <h1>Bloges</h1>
              <h3>    <NavLink to="/" style={{ color: "black", textDecoration: "none" }}>Home</NavLink> / Blog</h3>
            </div>
          </div>
        </div>
        <MainBlogs />
      </div>
        <Sechm />
        <Footer />
    </>
  )
}

export default Bloges