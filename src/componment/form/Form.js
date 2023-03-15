import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import './form.css'

export const Form = () => {
    return (
        <>
            <div className='container-fulid mx-5'>
                <div className='row' style={{ paddingTop: "50px", paddingBottom: "50px" }}>
                    <div className='col-md-5'>
                        <div>
                            <h2 className='fp' style={{ color: "black", fontWeight: "bolder" }}>Got A Project Or A Partnership<br /> In Mind?</h2>
                        </div>
                        <div className='xc' style={{ display: "flex" }}>
                            <div className='col-md-6' style={{ paddingTop: "20px" }}>
                                <EmailIcon />
                                <h4 className='jj' style={{ paddingTop: "20px" }}>Email:</h4>
                                <p className='vc'>Info@yourdomain.com</p>
                                <p className='vc'>Info@sample.com</p>

                            </div>
                            <div className='col-md-6' style={{ paddingTop: "20px" }}>
                                <CallIcon />
                                <h4 className='jj' style={{ paddingTop: "20px" }}>Phone:</h4>
                                <p className='vc'> +99 (0) 101 0000 888</p>
                                <p className='vc'> +99 (0) 101 0000 888</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-7'>
                        <div className='we' style={{ display: "flex", gap: "50px" }}>
                            <input className='in' type="text" placeholder="      Name" />
                            <input className='in' type="text" placeholder="      phonenumber" />
                        </div>
                        <div class="bn d-flex" style={{ paddingTop: "30px", borderRedius: '50px' }}>
                            <div className=''>
                                <textarea className="form-control" id="textAreaExample1" placeholder='your message here' rows="8" style={{width:"100%"}}></textarea>
                            </div>
                        </div>
                        <div className='ty' style={{ display: "flex", justifyContent: "space-between" }}>
                            <div className="tys form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">your email address will not be published.Required fileds are marked</label>
                            </div>
                            <button className='sbtn'>Send message</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
