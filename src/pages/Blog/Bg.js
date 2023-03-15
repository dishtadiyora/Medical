import React from 'react'
import './bg.css'
import Sidebar from '../../componment/sidebar/Sidebar'
import { Sechm } from '../../componment/sechm/Sechm'
import { Footer } from '../../componment/footer/Footer'
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const Blog = () => {
  return (
    <>
        <Sidebar />
      <div className='container-fulid mx-5'>
        <div className='row'>
          <div className='' style={{ paddingBottom: "40px" }}></div>
        </div>
      </div>
      <div className='container-fulid mx-5'>
        <div className='row'>
          <img className='er' src='../asset/12.webp' alt=' does not found'></img>
        </div>
      </div>
      <div className='container-fulid mx-5'>
        <div className='row'>
          <div className='bgc' style={{ padding: "80px 150px 0px 150px" }}>
            <h1 className='h'>WhatsApp shared ‘technical <br />jargon’ with govt agency, <br />didn’t</h1>
            <p style={{ textAlign: "center", padding: "10px" }}>DECEMBER 27, 2020 | BY MODERATOR | MEDICAL</p>
            <p>When, while the lovely valley teems with vapor around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath of that universal love which bears and sustains us, as it floats around us in an eternity of bliss; and then, my friend, when darkness overspreads my eyes, and heaven and earth seem to dwell in my soul and absorb its power, like the form of a beloved mistress, then I often think with longing, Oh, would I could describe these conceptions, could impress upon paper all that is living so full and warm within me, that it might be the mirror of my soul, as my soul is the mirror of the infinite God!</p>
            <p>O my friend — but it is too much for my strength — I sink under the weight of the splendor of these visions! A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.</p>
            <p>I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.</p>
            <p style={{ paddingBottom: '30px' }}>When, while the lovely valley teems with vapor around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath of that universal love which bears and sustains us, as it floats around us in an eternity of bliss; and then, my friend, when darkness overspreads my eyes, and heaven and earth seem to dwell in my soul and absorb its power, like the form of a beloved mistress, then I often think with longing, Oh, would I could describe these conceptions, could impress upon paper all that is living so full and warm within me.</p>
            <hr style={{ padding: "10px 40px" }}></hr>
            <div className='' style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ fontSize: "20px" }}> Tags:Blog</div>
              <div className='iconleft' ><FavoriteBorderIcon /><ShareIcon /></div>
            </div>
            <hr style={{ padding: "50px 20px" }}></hr>
            <div className=''>
              <h2>Leave A Comment</h2>
              <p>Your email address will not be published. Required fields are marked *</p>
            </div>
            <div className='fm'>
              <div class="row">
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
                <input type="text" id="form3Example8" class="form-control form-control-lg" style={{ borderRadius: '50px', backgroundColor: 'lightgray', height: '60px' }} placeholder='  website' />
              </div>
              <div class="form-outline mb-4 xyz">
                <textarea class="form-control" id="textAreaExample1" placeholder='    comment' style={{ height: "250px", borderRadius: '50px', backgroundColor: 'lightgray' }}></textarea>
              </div>
            </div>
            <button className='aboutbtns' >Submit</button>
          </div>
        </div>
      </div>
      <Sechm />
      <Footer />
    </>
  )
}

export default Blog