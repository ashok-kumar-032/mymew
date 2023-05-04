import React, { useState } from 'react'
import { Container, Nav, Row, Col } from 'react-bootstrap'
import { BiMenu } from 'react-icons/bi';
import hero from '../assets/hero.png'
import img_1 from '../assets/img_1.png'
import img_2 from '../assets/img_2.png'
import img_3 from '../assets/img_3.png'
import img_4 from '../assets/img_4.png'
import img_5 from '../assets/img_5.png'
import dog_l from '../assets/dog_l.png'
import emogy from '../assets/😍.png'
import star from '../assets/nav_star.png'
import dog_foot from '../assets/dog_foot.png'
import ring from '../assets/circle_ring.png'
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
        <Container>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center'>
              <a className='clr_black fw_400 fs_27 ff_Slackey ms-2 z-10 navlogo effect_1' href="#">Mew</a>
            </div>
            <ul className={first ? 'nav_show d-flex gap-4 align-items-center 0' : 'nav_show d-flex showw gap-4 mb-0 align-items-center ps-0'} >
              <li><a className='fw_400 fs_16 ff_Poppins clr_nav mb-0 ms-xl-4 home effect' href="#">Home</a>
              </li>
              <li><a className='fw_400 fs_16 ff_Poppins clr_nav mb-0 ms-xl-4 home effect' href="#">About</a>
              </li>
              <li><a className='fw_400 fs_16 ff_Poppins clr_nav mb-0 ms-xl-4 home effect' href="#">Services</a>
              </li>
              <li><a className='fw_400 fs_16 ff_Poppins clr_nav mb-0 ms-xl-4 home effect' href="#">Facilities</a>
              </li>
              <li><a className='fw_600 fs_16 ff_Poppins clr_dark_blue nav_btn d-block d-lg-none' href="#">Sign up</a></li>
            </ul>
            <a className='fw_600 fs_16 d-none d-xl-block ff_Poppins clr_dark_blue nav_btn' href="#">Sign up</a>
            <div className='z-10 d-xl-none'>
              <h3 className='clr_orange' onClick={clickshow}><BiMenu /></h3>
            </div>
          </div>
        </Container >
      </Nav>
      <section className=' d-flex flex-column justify-content-center flex-grow-1 pb-5'>
        <Container className='pb-sm-5'>
          <Row>
            <Col xl={5}>
              <img className='W_min position-absolute start-0' src={hero} />
              <img src={dog_foot} className=' position-absolute nav_foot grow_up'/>
            </Col>
            <Col xl={7} className='px-lg-5 mt_max p-sm-4 position-relative d-flex flex-column align-items-center align-items-xl-start'>
              {/* star img */}

              <p className='fw_400 fs_55 ff_Slackey clr_dark_blue position-relative text-center text-xl-start'>We take care of your pet and help them to grow <span><img className='grow_up' src={emogy}/><img src={star} className='rotate_animation position-absolute star_hero' />
              </span></p>
              <p className='fw_500 fs_16 ff_Poppins clr_grey pt-4 max_w_480 text-center text-xl-start'>Best pets are waiting for adoption. Find out the the perfect one you will like it. It’s our promise.</p>
              <div className=' d-flex position-relative mt-5 flex-column flex-sm-row align-items-center'>
                <a className='fw_600 fs_16 ff_Poppins clr_white bg_orange effect_1 Contact_btn d-inline-block' href="#">Contact us</a>
                <span> <img className='ms-sm-5 ps-sm-3 mt-4 mt-sm-0 z_1 img_0' src={img_1} />
                  <img className=' mt-4 mt-sm-0 img_2 img_0' src={img_2} />
                  <img className=' mt-4 mt-sm-0 img_3 img_0' src={img_3} />
                  <img className=' mt-4 mt-sm-0 img_4 img_0' src={img_4} />
                  <img className=' mt-4 mt-sm-0 img_5 img_0' src={img_5} /></span>
                {/* ring */}
                <img src={ring} className='rotate_animation position-absolute ring' />
              </div>
              <div className=' d-flex align-items-start mt-5'>
                <img className='ms-0' src={dog_l} />
                <span className='pt-2'>
                  <p className='fw_400 fs_20 ff_Slackey clr_grey mb-0'>How to take care </p>
                  <p className='fw_400 fs_18 ff_Poppins clr_grey mt-1'> perfect one you will like it. It’s our promise.</p>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </header >

  )
}

export default Mynav