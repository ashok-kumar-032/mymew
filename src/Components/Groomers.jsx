import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
export const Groomers = () => {
  return (
    <div className='bg_section py-5'>
      <Container>
        <div className=''>
          <p className='clr_dark_blue ff_Slackey fw_400 fs_45'>Our Groomers</p>
          <Row>
            <Col sm={4}>
              <div className=' img_box bg_sken d-flex flex-column justify-content-end pb-4'>
                <p className=' ff_Poppins fw_600 fs_20 mb-0 clr_dark_blue'>Adam Smith</p>
                <p className=' ff_Poppins fw_400 fs_16 mb-0 clr_grey'>Veterinarian</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}
