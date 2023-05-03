import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import foot from "../assets/dog_foot.png"
import injection from "../assets/imjection.png"
import cat from "../assets/cat.png"
import doctor from "../assets/doctor.png"
import hand from "../assets/hand.png"
import arrow from "../assets/color_arrow.png"
export const Ourservice = () => {
    return (
        <div className=' bg_section pt-5 pb-5'>
            <Container className=' d-flex flex-column align-items-center'>
                <div className=' d-flex flex-column align-items-center'>
                    <div className=' d-flex align-items-center justify-content-center'>
                        <span><img className=' grow_up' src={foot} alt="" /></span>
                        <p className=' ff_Slackey fw_400 fs_45 clr_dark_blue mb-0 ps-4'>Our Services</p>
                    </div>
                    <p className=' ff_Poppins fw_400 fs_16 clr_grey mx_473 text-center'>Best pets are waiting for adoption. Find out the the perfect one you will like it. It’s our promise.</p>
                </div>
                <Row className='pb-5'>
                    <Col xl={3} sm={6} xs={12} className='px-3'>
                        <div className='pet_box slow_animation px-4 py-5 d-flex flex-column align-items-center'>
                            <div className='pet_img_box slow_animation d-flex justify-content-center align-items-center'>
                                <span><img src={injection} alt="" /></span>
                            </div>
                            <p className=' mb-0 slow_animation hover_white pt-4 text-decoration-underline fw_400 fs_20 ff_Slackey clr_grey'>Vaccination</p>
                            <p className=' ff_Poppins slow_animation hover_white px-2 pt-3 mb-0 fw_400 fs_14 clr_grey text-center'>Perfect one you will like it. It’s our promise.</p>
                        </div>
                    </Col>
                    <Col xl={3} sm={6} xs={12} className='px-3 pt-5'>
                        <div className='pet_box_2 slow_animation px-4 py-5 d-flex flex-column align-items-center'>
                            <div className='pet_img_box_2 slow_animation  d-flex justify-content-center align-items-center'>
                                <span><img src={cat} alt="" /></span>
                            </div>
                            <p className=' slow_animation mb-0 hover_white pt-4 text-nowrap fw_400 fs_20 ff_Slackey clr_grey'>Pet Grooming</p>
                            <p className=' slow_animation ff_Poppins px-2 hover_white pt-3 mb-0 fw_400 fs_14 clr_grey text-center'>Perfect one you will like it. It’s our promise.</p>
                        </div>
                    </Col>
                    <Col xl={3} sm={6} xs={12} className='px-3 pt-5 pt-sm-0'>
                        <div className='pet_box_3 slow_animation px-4 py-5 d-flex flex-column align-items-center'>
                            <div className='pet_img_box_3 slow_animation  d-flex justify-content-center align-items-center'>
                                <span><img src={doctor} alt="" /></span>
                            </div>
                            <p className='slow_animation mb-0 hover_white pt-4 text-nowrap fw_400 fs_20 ff_Slackey clr_grey'>Veterinary</p>
                            <p className='slow_animation ff_Poppins px-2 hover_white pt-3 mb-0 fw_400 fs_14 clr_grey text-center'>Perfect one you will like it. It’s our promise.</p>
                        </div>
                    </Col>
                    <Col xl={3} sm={6} xs={12} className='px-3 pt-5'>
                        <div className='pet_box_4 slow_animation px-4 py-5 d-flex flex-column align-items-center'>
                            <div className='pet_img_box_4 slow_animation  d-flex justify-content-center align-items-center'>
                                <span><img src={hand} alt="" /></span>
                            </div>
                            <p className=' slow_animation mb-0 hover_white pt-4 text-nowrap fw_400 fs_20 ff_Slackey clr_grey'>Cleaning</p>
                            <p className=' slow_animation ff_Poppins px-2 hover_white pt-3 mb-0 fw_400 fs_14 clr_grey text-center'>Perfect one you will like it. It’s our promise.</p>
                        </div>
                    </Col>
                </Row>
                <div className='ps-md-5 ms-md-5 clr_show align-items-center d-flex justify-content-center'>
                    <a href="#" className='learn_butn effect ff_Poppins fw_600 fs_16 clr_white text-center'>Learn More</a>
                    <span><img src={arrow} className='colr_arrow effect_arrow d-none d-sm-block' alt="" /></span>
                    <span><img src={arrow} className='arrow_clr d-none d-sm-block' alt="" /></span>
                </div>

            </Container>
        </div>
    )
}
