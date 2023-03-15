import React from 'react'
import '../maincontent/maincontent.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export const Maincontent = () => {
    return (
        <>
            <div className='container-fulid mx-5'>
                <div className='maincontents' style={{ paddingTop: "80px" }}>
                    <div className='row' style={{ display: "flex" }}>
                        <div className='dava gap-4' style={{ display: "flex" }}>
                            <div className='bv col-md-6'>
                                <div className='botalfr' style={{ display: "flex" }}>
                                    <div className='firstbotal' >
                                        <p> Home Medical Supplies</p>
                                        <h4>Medicine Product</h4>
                                        <h5>$1.00-$55.00</h5>
                                        <button className='sbtn'>Shop Now</button>
                                    </div>
                                    <div className='secondbotal'>
                                        <img className='ing img-fulid' src='../asset/p1.png' alt=' not found' ></img>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='botalsr' style={{ display: "flex" }}>
                                    <div className='firstbotal' >
                                        <p> HomeMedical Supplies</p>
                                        <h4>IndependentLiving</h4>
                                        <h5>$45.00-$55.00</h5>
                                        <button className='sbtn'>Shop Now</button>
                                    </div>
                                    <div className='secondbotal'>
                                        <img className='ing img-fulid' src='../asset/p2.png' alt=' not found'></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}
