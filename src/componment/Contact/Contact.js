import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './contact.css'

const Contact = () => {
    return (
        <div className='container-fulid mx-5' >
            <div className='fn' style={{ padding: "200px" }}>
                <div class="row">
                    <h1 style={{ textAlign: "center", padding: "0px 0px 30px 0px" }}>Contact</h1>
                    <div class="col-lg-6 mb-4">
                        <div class="form-outline xyz">
                            <input type="text" id="form3Example1m" class="form-control form-control-lg" style={{ borderRadius: '50px', backgroundColor: 'lightgray', height: '60px' }} placeholder='       Name(Required*)' />
                        </div>
                    </div>
                    <div class="col-lg-6 mb-4">
                        <div class="form-outline xyz">
                            <input type="text" id="form3Example1n" class="form-control form-control-lg" style={{ borderRadius: '50px', backgroundColor: 'lightgray', height: '60px' }} placeholder='       Email(Required*)' />
                        </div>
                    </div>
                </div>
                <div class="form-outline mb-4 xyz">
                    <input type="text" id="form3Example8" class="form-control form-control-lg" style={{ borderRadius: '50px', backgroundColor: 'lightgray', height: '60px' }} placeholder='    Subject' />
                </div>
                <div class="form-outline mb-4 xyz">
                    <textarea class="form-control" id="textAreaExample1" placeholder='    comment' style={{ height: "250px", borderRadius: '50px', backgroundColor: 'lightgray' }}></textarea>
                </div>
                <div style={{ textAlign:"center"}}>
                    <button className='aboutbt'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Contact