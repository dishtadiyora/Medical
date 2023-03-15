import React from 'react'
import './sechm.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export const Sechm = () => {
    return (
        <>
            <div className='container-fulid mx-5'>
                <div className='row'>
                    <div className='secondhome'>
                        <div className='secondimage' style={{ height: "80vh" }}>
                            <div className='secondcontent'>
                                <h4>Subscribe Now For Get Every Day Tips</h4>
                                <p>A wonderful serenity has taken possession far away,behind the wprd moyuntains</p>
                                <div className="mn input-group" style={{border:"none",borderRadius:"20px"}}>
                                    <input type="text" className="fm form-control" placeholder="Your Email" style={{backgroundColor:"lightcyan"}}/>
                                    <span className="sm input-group-text " style={{backgroundColor:"blue",color:"white"}}>submit</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
