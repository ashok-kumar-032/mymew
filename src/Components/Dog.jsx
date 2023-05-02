import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import dog from '../assets/dog.png'

const Dog = () => {
    return (
        <section className='bg_section_1 '>
            <Container>
                <Row className='p_50 text-center text-lg-start'>
                    <Col lg={4}>
                        <p className='fw_400 fs_45 ff_Slackey clr_dark_blue'>Facilities we
                            provides</p>
                    </Col>
                    <Col lg={8} className='px-5'>
                        <p className='fw_400 fs_16 ff_Poppins clr_grey mt-3'>Facilities we
                            provides
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </Col>
                </Row>
                <div className=' d-flex align-items-center justify-content-center py-5'>
                    <img className='dog ' src={dog} alt="" />
                </div>
            </Container>
        </section>
    )
}

export default Dog