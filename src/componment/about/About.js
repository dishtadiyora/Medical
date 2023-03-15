import React from 'react'
import './about.css'
import { NavLink } from 'react-router-dom'
import { Acontent } from '../acontent/Acontent'
import { Sechm } from '../sechm/Sechm'
import { Footer } from '../footer/Footer'
import { Form } from '../form/Form'
import Sidebar from '../sidebar/Sidebar'
const About = () => {
    return (
        <>
            <Sidebar />
            <div className='container-fulid mx-5'>
                <div className='row' style={{ paddingTop: "30px" }}>
                    <div className='about'>
                        <div className='abouttit'>
                            <h1>About us</h1>
                            <h3>    <NavLink to="/" style={{ color: "black", textDecoration: "none" }}>Home</NavLink> / About</h3>
                        </div>
                    </div>
                </div>
            </div>
            <Acontent />
            <Form />
            <Sechm />
            <Footer />
        </>
    )
}
export default About
