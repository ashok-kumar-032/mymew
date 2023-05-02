import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import image from '../assets/adopt_img.png'
export const Adopted = () => {
    return (
        <div className=' bg_section'>
            <Container>
                <div className=' adopt_box w-100'>
                    <Row className=' align-items-center flex-lg-row flex-column-reverse'>
                        <Col lg={8} xs={12}>
                            <Row className='p-0 pt-3'>
                                <Col lg={4} sm={6} className='ps-sm-5 align-items-sm-start align-items-center adopt_line d-flex flex-column justify-content-center'>
                                    <p className=' ff_Poppins mb-0 fw_400 fs_18 clr_white text-start'>Adopted</p>
                                    <p className='mb-0 ff_Slackey fw_400 fs_35 clr_white text-start'>2500+</p>
                                </Col>
                                <Col lg={4} sm={6} className='d-flex align-items-sm-start align-items-center pt-3 pt-sm-0 adopt_line_2 ps-sm-5 flex-column justify-content-center'>
                                    <p className=' ff_Poppins mb-0 fw_400 fs_18 clr_white text-start'>Customers</p>
                                    <p className='mb-0 ff_Slackey fw_400 fs_35 clr_white text-start'>1850+</p>
                                </Col>
                                <Col lg={4} sm={6} className='ps-sm-5 align-items-center align-items-sm-start py-3 py-lg-0 d-flex  flex-column justify-content-center'>
                                    <p className=' ff_Poppins mb-0 fw_400 fs_18 clr_white text-start'>Testimonials</p>
                                    <p className='mb-0 ff_Slackey fw_400 fs_35 clr_white text-start'>1300+</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={4} xs={12} className='p-0 d-flex align-items-center'>
                            <div className=' adopt_box_2 w-100 pt-4 pb-4 px-3 ff_Poppins fw_400 fs_16 clr_white'>
                                <p className=' mb-0 pt-1'>Lorem ipsum dolor sit amet, consectetur ipcing elit, sed do eiusmod tempor incididu ut labore et quis nostrud sed do eius .....</p>
                                <div className=' d-flex justify-content-between'>
                                    <div>
                                        <hr className=' box_2_line' />
                                        <p className=' ff_Slackey clr_white fw_400 fs_18'>Daniel Kahneman</p>
                                    </div>
                                    <span className='pt-2'><img className=' w-100' src={image} alt="" /></span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}
