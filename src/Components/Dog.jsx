import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import dog from '../assets/dog.png'

const Dog = () => {
    return (
        <section className='bg_section_1 py-5'>
            <Container>
                <Row className='p_50 text-center text-lg-start'>
                    <Col lg={5}>
                        <p className='fw_400 fs_45 ff_Slackey clr_dark_blue'>Facilities we
                            provides</p>
                    </Col>
                    <Col lg={7} className='px-5'>
                        <p className='fw_400 fs_16 ff_Poppins clr_grey mt-3'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </Col>
                </Row>
                <div className=' d-flex align-items-center  justify-content-center py-5 mt-md-5'>
                    <div className='position-relative'><img className='dog border_dog  w_100 mt_50' src={dog} alt="" />
                        <span className='bol_r_1'></span>
                        <span className='bol_l_1'></span>
                        <span className='line_r_1'></span>
                        <span className='line_l_1'></span>
                        <span className='feed'>
                            <p className='fw_400 fs_22 ff_Slackey clr_dark_blue'>Feed Training</p>
                            <p className='fw_400 fs_16 ff_Poppins clr_grey max_w_240'>Ut enim ad minim  velit esse cillum dolore eu fugiat..   </p>
                        </span>
                        <span className='Health'>
                            <p className='fw_400 fs_22 ff_Slackey clr_dark_blue'>Health test</p>
                            <p className='fw_400 fs_16 ff_Poppins clr_grey max_w_240'>tempor incididunt ut labore et dolore magna aliqua...</p>
                        </span>
                        <span className='Vaccination'>
                            <p className='fw_400 fs_22 ff_Slackey clr_dark_blue'>Vaccination</p>
                            <p className='fw_400 fs_16 ff_Poppins clr_grey max_w_240'>tempor incididunt ut labore et dolore magna aliqua...</p>
                        </span>
                        <span className='Overnight'>
                            <p className='fw_400 fs_22 ff_Slackey clr_dark_blue'>Overnight Care</p>
                            <p className='fw_400 fs_16 ff_Poppins clr_grey max_w_240'>Ut enim ad minim  velit esse cillum dolore eu fugiat..</p>
                        </span>
                        <span className='Medical'>
                            <p className='fw_400 fs_22 ff_Slackey clr_dark_blue'>Medical Care</p>
                            <p className='fw_400 fs_16 ff_Poppins clr_grey max_w_240'>tempor incididunt ut labore et dolore magna aliqua...</p>
                        </span>
                        <span className='Traning'>
                            <p className='fw_400 fs_22 ff_Slackey clr_dark_blue'>Traning Facility</p>
                            <p className='fw_400 fs_16 ff_Poppins clr_grey max_w_240'>tempor incididunt ut labore et dolore magna aliqua...</p>
                        </span>
                    </div>
                </div>

            </Container>
        </section>
    )
}

export default Dog