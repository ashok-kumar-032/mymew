import React from 'react'
import Slider from "react-slick";

import { Container, Row, Col } from 'react-bootstrap'
import our_1 from "../assets/our_1.png"
import our_2 from "../assets/our_2.png"
import our_3 from "../assets/our_3.png"
import our_4 from "../assets/our_4.png"
import groo_1 from "../assets/groo_1.svg"
import groo_2 from "../assets/groo_2.svg"
export const Groomers = () => {
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1, responsive: [{

      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        infinite: true,
        initialSlide: 1,
        dots: true
      }

    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        infinite: true,
        initialSlide: 1,
        dots: true
      }

    }, {

      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        dots: true
      }

    }, {


    }]
  };
  return (
    <section className='bg_section py-5 position-relative'>
      <span>
        <img className=' position-absolute groo_1 zig_position' src={groo_1} alt="" />
        <img className=' position-absolute groo_2' src={groo_2} alt="" />
      </span>
      <Container className='py-4'>
        <div className=' d-flex align-items-center justify-content-center'>
          <p className='fw_400 fs_45 ff_Slackey clr_dark_blue text-center'>Our Groomers</p>
        </div>
        <Slider {...settings} className='mt-4'>
          {/* 1 */}
          <div className=' pt-3 d-flex flex-column justify-content-center align-items-center'>
            <span className=' d-flex justify-content-center'> <img src={our_1} className='our_img' /></span>
            <div className=' img_box bg_sken d-flex flex-column justify-content-end align-items-center pb-4'>
              <p className=' ff_Poppins fw_600 fs_20 mb-0 text-center clr_dark_blue'>Adam Smith</p>
              <p className=' ff_Poppins fw_400 fs_16 pb-2 mb-0 text-center clr_grey'>Veterinarian</p>
            </div>
          </div>
          {/* 2 */}
          <div className=' pt-3 d-flex flex-column justify-content-center align-items-center'>
            <span className=' d-flex justify-content-center'> <img src={our_2} className='our_img' /></span>
            <div className=' img_box bg_sken d-flex flex-column justify-content-end align-items-center pb-4'>
              <p className=' ff_Poppins fw_600 fs_20 mb-0 text-center clr_dark_blue'>Morgan Mark</p>
              <p className=' ff_Poppins fw_400 fs_16 pb-2 mb-0 text-center clr_grey'>Trainer</p>
            </div>
          </div>
          {/* 3 */}
          <div className=' pt-3 d-flex flex-column justify-content-center align-items-center'>
            <span className=' d-flex justify-content-center'> <img src={our_3} className='our_img' /></span>
            <div className=' img_box bg_sken d-flex flex-column justify-content-end align-items-center pb-4'>
              <p className=' ff_Poppins fw_600 fs_20 mb-0 text-center clr_dark_blue'>Ana Fargun</p>
              <p className=' ff_Poppins fw_400 fs_16 pb-2 mb-0 text-center clr_grey'>Trainer</p>
            </div>
          </div>
          {/* 4 */}
          <div className=' pt-3 d-flex flex-column justify-content-center align-items-center'>
            <span className=' d-flex justify-content-center'> <img src={our_4} className='our_img' /></span>
            <div className=' img_box bg_sken d-flex flex-column justify-content-end align-items-center pb-4'>
              <p className=' ff_Poppins fw_600 fs_20 mb-0 text-center clr_dark_blue'>Mouran Maz</p>
              <p className=' ff_Poppins fw_400 fs_16 pb-2 mb-0 text-center clr_grey'>Care Taker</p>
            </div>
          </div>
        </Slider>
        <div className=' d-flex align-items-center justify-content-center mt-4'>
          <a href="#" className='learn_butn effect_arrow ff_Poppins mt-5 fw_600 fs_16 clr_white text-center'>Learn More</a>
        </div>
      </Container>
    </section>
  )
}
