import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import coll from '../assets/coll.png'
import let_2 from '../assets/let_2.png'
import plus from '../assets/green_plus.png'
import plus_red from '../assets/red_plus.png'
import orange_line from '../assets/orange_line.png'

const Let = () => {
    return (
        <section className='bg_section_1 py-5'>
            <Container className=' pb-lg-5'>
                <Row className='pb-5'>
                    <Col lg={6} className='mt-5' data-aos="fade-down-right" data-aos-duration="2000">
                        <p className='fw_400 fs_45 ff_Slackey clr_dark_blue text-center text-lg-start'>Lets book a call and stay connected </p>
                        <div className=' d-flex mt-4 flex-column flex-sm-row align-items-center'>
                            <div className=' d-flex align-items-center'>
                                <input type="checkbox" defaultChecked='checked' className='lage_box' />
                                <p className=' mb-0 fw_500 fs_18 ff_Poppins clr_grey ms-2'>Vaccination Service </p>
                            </div>
                            <div className=' d-flex align-items-center ms-sm-5'>
                                <input type="checkbox" defaultChecked='checked' className='lage_box' />
                                <p className=' mb-0 fw_500 fs_18 ff_Poppins clr_grey ms-2'>Vaccination Service </p>
                            </div></div>
                        <p className='mt-4 pt-3 fw_400 fs_16 ff_Poppins clr_grey text-center text-lg-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <div className='mt-5 d-flex flex-column flex-sm-row align-items-center align-items-sm-start'>
                            <a className='Book_btn effect w_600 fs_16 ff_Poppins clr_white ms-2 ms-sm-0 effect_1' href="#">Book a Schedule</a>
                            <p className='w_500 fs_18 ff_Poppins clr_dark_blue Call ms-sm-5 mt-2'><span><img src={coll} /></span> Emergency Call</p>
                        </div>
                    </Col>
                    <Col lg={6} className='mt-4 mt-sm-0 position-relative' data-aos="fade-up-left" data-aos-duration="2000">
                        <img className=' w-100' src={let_2} />
                        <img src={plus} className='green_plus position-absolute grow_up' />
                        <img src={plus_red} className='plus_red position-absolute rotate_animation' />
                        <img src={orange_line} className='orange_line position-absolute move_animation' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Let