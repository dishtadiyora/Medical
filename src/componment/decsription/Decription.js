import React, { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
const Decription = () => {
  const [basicActive, setBasicActive] = useState('tab1');

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };
  return (
    <div className='container-fulid mx-5'>
      <div className='row'>
        <div>
          <MDBTabs className='' style={{ backgroundColor: "skyblue", borderRadius: "10px 10px 0px 0px" }}>

            <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'} >
              Description
            </MDBTabsLink>

            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                Additional information
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                Reviews
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>

        </div>
        <MDBTabsContent style={{ backgroundColor: "white", borderRadius: "20px" }}>
          <MDBTabsPane show={basicActive === 'tab1'}>
            <div className='mcon' style={{ borderRadius: "0px 0px 10px 10px", padding: "80px 150px 0px 150px" }}>

              <h3>Game Console Controller Cable</h3>
              <p style={{ paddingTop: "40px" }}>Hills Science Plan Healthy Development Puppy Food Large Breed with Chicken is specifically formulated to meet the nutritional
                needs of your large breed puppy to help support its growth and development.

                Made from high quality ingredients including a minimum of 34% chicken, Hills Science Plan Canine Puppy Large Breed is infused with:</p>
              <div className='' style={{ padding: "0px 40px" }}>
                <p>Controlled Fat and Calories – to help large breed puppies grow at the proper rate;</p>
                <p>Controlled Calcium – for healthy joint and bone development;</p>
                <p>L-carnitine – a special nutrient shown to enhance bone and muscle strength;</p>
                <p>High Quality Protein – to support healthy growth and strong muscles;</p>
                <p>Minerals – provides the optimum amount for growth and development;</p>
                <p>With added calcium to help keep bones and teeth strong;</p>
                <p>Natural Fibre – for a healthy digestive system;</p>
                <p>Omega 3 and 6 Fatty Acids – for a shiny, healthy coat;</p>
                <p>Anti-oxidants – boosts your puppys immune system, reduces cell damage and aids growth.</p>
              </div>
              <div className='' style={{ lineHeight: "40px", paddingTop: "20px" }}>
                <p>The crunchy kibble will help aid your puppys dental health through the natural crunching process, promoting dental care from a young age.</p>
                <p>Suitable for puppies from weaning up to 1 year old whose adult body weight will exceed 25kg.</p>
                <p>Hills Science Plan Canine Puppy Large Breed is part of the Pets at Home Nutrition Centre.</p>
                <p>Approximate Dimensions (Product): 42 x 15 x 20cm</p>
              </div>
            </div></MDBTabsPane>
          <MDBTabsPane show={basicActive === 'tab2'}>

            <div className='mcon' style={{ borderRadius: "0px 0px 10px 10px", padding: "80px 150px 0px 150px" }}>

              <h4>Details Specification</h4>
              <p>NoiseStom Font Duo</p>
             <div style={{paddingBottom:"50px"}}>
             <table className='tabels' border="1" style={{ width: '100%', height: "500px", textAlign: "center", paddingBottom: "50px" }}>
                <tr style={{ backgroundColor: 'white' }}>
                  <th>Brand</th>
                  <th>Cheetos</th>
                </tr>
                <tr style={{ backgroundColor: "lightgray" }}>
                  <td>Publisher</td>
                  <td>pearson education(mar.1st,2012)</td>
                </tr>

                <tr style={{ backgroundColor: 'white' }}>
                  <td>Language </td>
                  <td>English</td>
                </tr>
                <tr style={{ backgroundColor: "lightgray" }}>
                  <td>Dimensions </td>
                  <td>8.40* 10.70*0.90 inches</td>
                </tr>
                <tr style={{ backgroundColor: 'white' }}>
                  <td>ISBN-13: </td>
                  <td>9780321793911</td>
                </tr>
                <tr style={{ backgroundColor: 'lightgray' }}>
                  <td>Categories: </td>
                  <td>Elementary Education</td>
                </tr>
              </table>
             </div>

            </div>

          </MDBTabsPane>
          <MDBTabsPane show={basicActive === 'tab3'}>
            <div className='mcon' style={{ borderRadius: "0px 0px 10px 10px", padding: "80px 150px 0px 150px" }}>

              <h1 style={{ fontSize: "40px" }}>Add A Review</h1>
              <p style={{ color: "gray", fontSize: "18px" }}>Your email address will not be published. Required fields are marked *</p>

              <div className='d-flex'>
                <div style={{ fontWeight: "bold" }}>Your Rating</div>
                <div>
                  <div className=''>
                    <h5>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </h5>
                  </div>
                </div>
              </div>
              <div className=''>
                <div className='we' style={{ display: "flex", gap: "50px" }}>
                  <input className='in' type="text" placeholder="      Name" style={{ border: "none" }} />
                  <input className='in' type="text" placeholder="      Email" style={{ border: "none" }} />
                </div>
                <div class="bn d-flex" style={{ paddingTop: "30px", borderRedius: '50px' }}>
                  <div className=''>
                    <textarea className="form-control" id="textAreaExample1" placeholder='your message here' rows="8" style={{ width: "100%", border: "none" }}></textarea>
                    <div style={{ paddingTop: "30px", paddingBottom: "50px" }}>
                      <button className='sbtn' style={{ float: "right" }}>Submit</button>
                    </div>
                  </div>
                </div>
                <hr></hr>

              </div>
              <div style={{ fontWeight: "bold", fontSize: "30px" }}>9 Reviews For Anti-Septic Dry Hand Gel</div>
              <div className="container" style={{ padding: "50px 0px 50px 0px" }}>
                <div className='row'>

                  <div className="cards" style={{ backgroundColor: 'white' }}>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-2">
                          <img src="https://image.ibb.co/jw55Ex/def_face.jpg" className="img img-rounded img-fluid" />
                          <p className="text-secondary text-center">15 Minutes Ago</p>
                        </div>
                        <div className="col-md-10">
                          <p>
                            <a className="float-left" href="https://maniruzzaman-akash.blogspot.com/p/contact.html"><strong>Anonymous</strong></a>
                            <span className="float-right"><i className="text-warning fa fa-star"></i></span>
                            <span className="float-right"><i className="text-warning fa fa-star"></i></span>
                            <span className="float-right"><i className="text-warning fa fa-star"></i></span>
                            <span className="float-right"><i className="text-warning fa fa-star"></i></span>

                          </p>
                          <div className="clearfix"></div>
                          <p>Lorem Ipsum is simply dummy text of the pr make  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="container" style={{ padding: "50px 0px 50px 0px" }}>
                <div className='row'>
                  <div className="cards" style={{ backgroundColor: 'white' }}>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-2">
                          <img src="https://image.ibb.co/jw55Ex/def_face.jpg" className="img img-rounded img-fluid" />
                          <p className="text-secondary text-center">15 Minutes Ago</p>
                        </div>
                        <div className="col-md-10">
                          <p>
                            <a className="float-left" href="https://maniruzzaman-akash.blogspot.com/p/contact.html"><strong>Anonymous</strong></a>
                            <span className="float-right"><i className="text-warning fa fa-star"></i></span>
                            <span className="float-right"><i className="text-warning fa fa-star"></i></span>
                            <span className="float-right"><i className="text-warning fa fa-star"></i></span>
                            <span className="float-right"><i className="text-warning fa fa-star"></i></span>

                          </p>
                          <div className="clearfix"></div>
                          <p>Lorem Ipsum is simply dummy text of the pr make  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>


          </MDBTabsPane>
        </MDBTabsContent>
      </div>
    </div >
  )
}

export default Decription