import React from 'react'
import './Blogs.css'
const Blogs = (props) => {
    return (
        <>        
                    <div className='col-md-3'>
                        <div className='blogfirst' style={{ paddingTop: "50px" }}>
                            <div className='' style={{ paddingBottom: "10px" }}>
                                <img className='qwe img-fluid' src={props.img} alt='image does not found'></img>
                            </div>
                            <div className='' style={{ paddingTop: '10px' }}>
                                <h4 className='fr' style={{ fontSize: "18px", color: "gray", marginBottom: "0px" }}>{props.heading}</h4>
                                <h7 className="ha" >{props.text}</h7>
                            </div>
                       </div>
                    </div>
        </>
    )
}
export default Blogs