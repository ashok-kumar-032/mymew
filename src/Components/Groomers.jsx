import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import img_1 from "../assets/our_1.png"
export const Groomers = () => {
  return (
    <div className='bg_section py-5'>
      <Container>
        <div className=''>
          <p className='clr_dark_blue text-center ff_Slackey fw_400 fs_45'>Our Groomers</p>
          <Row>
            <Col xl={3} md={6} xs={12} className=' pt-3 d-flex flex-column justify-content-center align-items-center'>
             <span className=' d-flex justify-content-center'> <img src={img_1} className='our_img'/></span>
              <div className=' img_box bg_sken d-flex flex-column justify-content-end align-items-center pb-4'>
                <p className=' ff_Poppins fw_600 fs_20 mb-0 text-center clr_dark_blue'>Adam Smith</p>
                <p className=' ff_Poppins fw_400 fs_16 pb-2 mb-0 text-center clr_grey'>Veterinarian</p>
              </div>
            </Col>
            <Col xl={3} md={6} xs={12} className=' pt-3 d-flex flex-column justify-content-center align-items-center'>
             <span className=' d-flex justify-content-center'> <img src={img_1} className='our_img'/></span>
              <div className=' img_box bg_sken d-flex flex-column justify-content-end align-items-center pb-4'>
                <p className=' ff_Poppins fw_600 fs_20 mb-0 text-center clr_dark_blue'>Adam Smith</p>
                <p className=' ff_Poppins fw_400 fs_16 pb-2 mb-0 text-center clr_grey'>Veterinarian</p>
              </div>
            </Col>
            <Col xl={3} md={6} xs={12} className=' pt-3 d-flex flex-column justify-content-center align-items-center'>
             <span className=' d-flex justify-content-center'> <img src={img_1} className='our_img'/></span>
              <div className=' img_box bg_sken d-flex flex-column justify-content-end align-items-center pb-4'>
                <p className=' ff_Poppins fw_600 fs_20 mb-0 text-center clr_dark_blue'>Adam Smith</p>
                <p className=' ff_Poppins fw_400 fs_16 pb-2 mb-0 text-center clr_grey'>Veterinarian</p>
              </div>
            </Col>
            <Col xl={3} md={6} xs={12} className=' pt-3 d-flex flex-column justify-content-center align-items-center'>
             <span className=' d-flex justify-content-center'> <img src={img_1} className='our_img'/></span>
              <div className=' img_box bg_sken d-flex flex-column justify-content-end align-items-center pb-4'>
                <p className=' ff_Poppins fw_600 fs_20 mb-0 text-center clr_dark_blue'>Adam Smith</p>
                <p className=' ff_Poppins fw_400 fs_16 pb-2 mb-0 text-center clr_grey'>Veterinarian</p>
              </div>
            </Col>

          </Row>
        </div>
      </Container>
    </div>
  )
}
