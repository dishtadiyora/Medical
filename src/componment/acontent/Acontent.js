import React from 'react'
import './acontent.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export const Acontent = () => {
  return (
    <>
      <div className='container-fulid mx-5'>
        <div class="row " style={{ paddingTop: "50px", paddingBottom: '50px' }}>
          <div class="col-md-5 ">
            <img className='imd img-fluid' src='../asset/qw.jpg' alt=' not found'></img>
          </div>
          <div class="col-md-7 ">
            <div className='mn'>
              <div className='aa' style={{ paddingTop: "50px", paddingRight: "30px" }}>
                <p style={{ color: "skyblue", fontSize: "20px" }}>Why Choose Us</p>
                <h2 className='h2' style={{ color: "black" }}>We Are Providing Best Service Since 2001 To Present</h2>
                <div className='hr'></div>
                <p className='p' style={{ paddingTop: '40px', color: "gray", fontSize: '16px' }}>we are idea generatores,goal seekers ,challenge-thirsty<br /> professions ,creatores of unique internet projects.we deliver <br />unconvensational solutions</p>
              </div>
              <div className='vc' style={{ display: "flex" }}>
                <div className=' col-md-4'>
                  <h5 style={{ fontWeight: "bolder" }}>Search Optimization</h5>
                  <p style={{ fontSize: '15px', paddingTop: "12px" }}>Meanigful </p>
                  <p style={{ fontSize: '15px', paddingTop: "0px", lineHeight: "3px" }}>in which we </p>
                </div>
                <div className='aconleft col-md-4' style={{ paddingLeft: "5px" }}>
                  <h5 style={{ fontWeight: "bolder" }}>Web project</h5>
                  <p style={{ fontSize: '15px', paddingTop: "12px" }}>we are</p>
                  <p style={{ fontSize: '15px', paddingTop: "0px", lineHeight: "3px" }}> seekers</p>
                </div>
                <div className='aconleft col-md-4' style={{ paddingLeft: "5px" }}>
                  <h5 style={{ fontWeight: "bolder" }}>Dedicated Suport</h5>
                  <p style={{ fontSize: '15px', paddingTop: "12px" }}>we are </p>
                  <p style={{ fontSize: '15px', paddingTop: "0px", lineHeight: "3px" }}>thirstly </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
