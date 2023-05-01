import React, { useState } from 'react'
import { Container, Nav, Row, Col } from 'react-bootstrap'
import { BiMenu } from 'react-icons/bi';
import hero from '../assets/hero.png'
const Mynav = () => {
  const [first, setfirst] = useState(true)
  function clickshow() {
    setfirst(!first)
  }
  if (!first) {
    document.body.classList.add('overflow-hidden')
  }
  else {
    document.body.classList.remove('overflow-hidden')

  }
  return (
    <header className=' d-flex flex-column min-vh-100 bg_section_1'>
      <Nav className='py-4'>
        <Container className=''>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center'>
              <a className='clr_black fw_400 fs_27 ff_Slackey ms-2 z-10' href="#">Mew</a>
            </div>
            <ul className={first ? 'nav_show d-flex gap-4 align-items-center' : 'nav_show d-flex showw gap-4 mb-0 align-items-center'} >
              <li><a className='fw_400 fs_16 ff_Poppins clr_nav mb-0 ms-xl-4' href="#">Home</a>
              </li>
              <li><a className='fw_400 fs_16 ff_Poppins clr_nav mb-0 ms-xl-4' href="#">About</a>
              </li>
              <li><a className='fw_400 fs_16 ff_Poppins clr_nav mb-0 ms-xl-4' href="#">Services</a>
              </li>
              <li><a className='fw_400 fs_16 ff_Poppins clr_nav mb-0 ms-xl-4' href="#">Facilities</a>
              </li>

              {/* <div className={first ? 'nav_show d-flex gap-4 align-items-center' : 'nav_show d-flex showw gap-4 mb-0 align-items-center'}></div> */}
              <li><a className='fw_600 fs_16 ff_Poppins clr_dark_blue nav_btn d-block d-lg-none' href="#">Sign up</a></li>
            </ul>
            <a className='fw_600 fs_16 d-none d-lg-block ff_Poppins clr_dark_blue nav_btn' href="#">Sign up</a>
            <div className='z-10 d-xl-none'>
              <h3 className='clr_orange' onClick={clickshow}><BiMenu /></h3>
            </div>
          </div>
        </Container >
      </Nav>
      <section className=' d-flex flex-column justify-content-center flex-grow-1 pb-5'>
        <Container className='pb-5'>
          <Row>
            <Col lg={6}>
              <img className=' w-100' src={hero} alt="" />
            </Col>
            <Col lg={6}>
              <p className='fw_400 fs_55 ff_Slackey clr_dark_blue'>We take care of your pet and help them to grow </p>
              <p className='fw_500 fs_16 ff_Poppins clclr_greyr_nav'>Best pets are waiting for adoption. Find out the the perfect one you will like it. It’s our promise.</p>
            </Col>
          </Row>
        </Container>
      </section>
    </header >

  )
}

export default Mynav