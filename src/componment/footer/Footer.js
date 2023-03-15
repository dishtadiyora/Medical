import React from 'react'
import './footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer = () => {
    return (
        <>
            <div className='container-fulid mx-5'>
                <div className='row' style={{ paddingBottom: "50px" }}>

                    <div className='col-md-4'>
                        <div>
                            <img src='../asset/logos.png' alt=' not found' />
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div>
                            <h4>Visit Link</h4>
                            <h6>privacy</h6>
                            <h6>Terms & condition</h6>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div>
                            <h4>Company</h4>
                            <h6>Home</h6>
                            <h6>About</h6>
                            <h6>Contact us</h6>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div>
                            <h4>Contact</h4>
                            <h6>+99(0)101 0000 888</h6>
                            <h6>Info@yourdomail.com</h6>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div>
                            <h4>Address</h4>
                            <h6>patricia Amedee 4401 Waldeck Street Grapevice Nashville,Tx 76501</h6>
                        </div>
                    </div>
                    <hr style={{ paddingTop: "20px" }}></hr>
                    <div className='container'>
                        <div className='row'>
                            <div className='starter col-md-10'>
                                <h9>Copyright @ 2022 Shop Drugstore-phlox Elementor WordPressTheme.All Rights Reserved.</h9>
                            </div>
                            <div className='laster col-md-2' style={{ display: "flex" }}>
                                <div className='facebook'>
                                    <FacebookIcon />
                                </div>
                                <div className='instragram'>
                                    <InstagramIcon />
                                </div>
                                <div className='twitter'>
                                    <TwitterIcon />
                                </div>
                                <div className='link'>
                                    <LinkedInIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
