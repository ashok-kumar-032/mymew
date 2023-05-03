import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import dog from "../assets/hair_dog.png"
export const DaCode = () => {
    return (
        <div className='py-5 bg_section_1'>
            <Container>
                <Row>
                    <Col xl={6} xs={12}>
                        <div>
                            <p className=' ff_Slackey fw_400 fs_45 clr_black mb-0'>DaCode Blog</p>
                            <p className=' ff_Poppins pt-4 fw_400 mx_363 fs_16 clr_grey mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <a href="#" className='learn_butn d-inline-block ff_Poppins mt-5 fw_600 fs_16 clr_white text-center'>Learn More</a>
                           
                        </div>
                    </Col>
                    <Col xl={6} xs={12} className='p-0'>
                        <div className=' dog_box p-4'>
                            <Row className=' h-100'>
                                <Col xs={6} className='dog_box_slider d-flex align-items-center'>
                                    <img src={dog} className=' w-100 h-75' />
                                </Col>
                                <Col xs={6}>
                                    <div className='ps-3'>
                                        <p className=' ff_Poppins fw_600 fs_20 clr_black mb-0'>Why Your SaaS Business should use WordPress</p>
                                        <p className=' ff_Poppins pt-3 fw_400 fs_16 clr_grey'>A content management system like WordPress can help you build a highly engaging website for your SaaS business, with little to no effort</p>
                                        <div className=' d-flex'>
                                            <span className=' pointer arrow_btn d-flex justify-content-center align-items-center'><svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.9467 7.88379L2.82078 7.88379" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M6.9632 12.0261L2.82075 7.88368L6.9632 3.74124" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            </span>
                                            {/* arrow 2 */}
                                            <span className='ms-4 pointer arrow_btn d-flex justify-content-center align-items-center'><svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.82071 7.88379L12.9467 7.88379" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M8.80426 3.74146L12.9467 7.8839L8.80426 12.0263" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>

                                            </span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
