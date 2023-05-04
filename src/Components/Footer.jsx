import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <section className='bg_section py-5'>
            <Container>
                <Row>
                    <Col lg={5} data-aos="fade-down-right" data-aos-duration="2000">
                        <a className='clr_black fw_400 fs_27 ff_Slackey ms-2 z-10 navlogo effect_1' href="#">Mew</a>
                        <p className='fw_400 fs_14 ff_Poppins clr_grey pt-4 max_w_440'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <div className='mt-5 ps-0 d-flex'>
                            <span className='hover_up d-flex align-items-center justify-content-center effect'>
                                <a className=' footer_img d-flex align-items-center justify-content-center' href="#">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.7" d="M12.4444 0H1.55556C0.7 0 0 0.7 0 1.55556V12.4444C0 13.3008 0.7 14 1.55556 14H7V8.55556H5.44444V6.63056H7V5.03611C7 3.353 7.94267 2.17078 9.92911 2.17078L11.3314 2.17233V4.19844H10.4004C9.62733 4.19844 9.33333 4.77867 9.33333 5.31689V6.63133H11.3307L10.8889 8.55556H9.33333V14H12.4444C13.3 14 14 13.3008 14 12.4444V1.55556C14 0.7 13.3 0 12.4444 0Z" fill="#000958" />
                                    </svg>

                                </a>
                            </span>
                            <span className='hover_up d-flex align-items-center justify-content-center ms-3 effect'>
                                <a className=' footer_img d-flex align-items-center justify-content-center' href="#">
                                    <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.7" d="M4.58338 11.9998C5.70216 12.007 6.8112 11.7889 7.84618 11.3583C8.88116 10.9277 9.82148 10.2931 10.6126 9.49132C11.4037 8.68956 12.0299 7.73659 12.4548 6.68769C12.8797 5.63878 13.0948 4.51481 13.0878 3.38098V2.98494C13.6677 2.55432 14.1697 2.02517 14.5714 1.42093C14.0253 1.66298 13.4475 1.82351 12.856 1.89751C13.4831 1.51878 13.9537 0.922635 14.1806 0.219387C13.5962 0.574774 12.9552 0.82461 12.2864 0.957762C11.8359 0.471352 11.2399 0.148943 10.5904 0.0404223C9.94098 -0.0680986 9.27434 0.0433178 8.69367 0.357432C8.113 0.671547 7.65065 1.17085 7.37818 1.77808C7.10571 2.38531 7.03829 3.06663 7.18636 3.7166C5.99815 3.65749 4.83554 3.34541 3.77424 2.80068C2.71294 2.25595 1.77675 1.49079 1.02662 0.555012C0.648377 1.22034 0.533729 2.00647 0.705893 2.75424C0.878056 3.50202 1.32417 4.15555 1.9539 4.58251C1.48934 4.56436 1.03553 4.43558 0.629221 4.20661V4.24018C0.625093 4.93548 0.856218 5.61122 1.28408 6.15476C1.71193 6.69831 2.31068 7.07683 2.98052 7.22724C2.54844 7.34502 2.09583 7.36337 1.65584 7.28094C1.84977 7.87391 2.21995 8.39157 2.71561 8.76292C3.21128 9.13426 3.80817 9.34111 4.42442 9.3551C3.37078 10.2147 2.06126 10.6878 0.708701 10.6976C0.471554 10.6906 0.234962 10.6705 0 10.6372C1.36902 11.5212 2.96012 11.9872 4.58338 11.9797" fill="#000958" />
                                    </svg>


                                </a>
                            </span>
                            <span className='hover_up d-flex align-items-center justify-content-center ms-3 effect'>
                                <a className=' footer_img d-flex align-items-center justify-content-center' href="#">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.7" d="M13.2222 0H0.777778C0.571498 0 0.373667 0.0819442 0.227806 0.227806C0.0819442 0.373667 0 0.571498 0 0.777778V13.2222C0 13.4285 0.0819442 13.6263 0.227806 13.7722C0.373667 13.9181 0.571498 14 0.777778 14H13.2222C13.4285 14 13.6263 13.9181 13.7722 13.7722C13.9181 13.6263 14 13.4285 14 13.2222V0.777778C14 0.571498 13.9181 0.373667 13.7722 0.227806C13.6263 0.0819442 13.4285 0 13.2222 0V0ZM4.15256 11.9288H2.07433V5.24767H4.15256V11.9288ZM3.11344 4.33533C2.79412 4.33533 2.48788 4.20848 2.26209 3.98269C2.03629 3.7569 1.90944 3.45065 1.90944 3.13133C1.90944 2.81201 2.03629 2.50577 2.26209 2.27998C2.48788 2.05418 2.79412 1.92733 3.11344 1.92733C3.43276 1.92733 3.73901 2.05418 3.9648 2.27998C4.19059 2.50577 4.31744 2.81201 4.31744 3.13133C4.31744 3.45065 4.19059 3.7569 3.9648 3.98269C3.73901 4.20848 3.43276 4.33533 3.11344 4.33533V4.33533ZM11.9296 11.9288H9.85367V8.68C9.85367 7.90533 9.83967 6.909 8.77411 6.909C7.693 6.909 7.52889 7.75367 7.52889 8.62556V11.9296H5.45456V5.24844H7.44567V6.16156H7.47444C7.75056 5.63656 8.42878 5.08278 9.43756 5.08278C11.5407 5.08278 11.9288 6.46567 11.9288 8.26544V11.9288H11.9296Z" fill="#000958" />
                                    </svg>


                                </a>
                            </span>
                            <span className='hover_up d-flex align-items-center justify-content-center ms-3 effect'>
                                <a className=' footer_img d-flex align-items-center justify-content-center' href="#">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M7 0C5.0988 0 4.8608 0.00839996 4.1139 0.042C3.3691 0.0763 2.8602 0.1946 2.415 0.3675C1.94774 0.543091 1.52443 0.818532 1.1746 1.1746C0.818549 1.52444 0.543112 1.94775 0.3675 2.415C0.1946 2.8602 0.0763 3.3691 0.042 4.1139C0.00769996 4.8608 0 5.0988 0 7C0 8.9012 0.00769996 9.1392 0.042 9.8861C0.0763 10.6309 0.1946 11.1398 0.3675 11.585C0.543132 12.0522 0.818567 12.4755 1.1746 12.8254C1.52446 13.1814 1.94776 13.4569 2.415 13.6325C2.8602 13.8054 3.3691 13.9237 4.1139 13.958C4.8608 13.9916 5.0988 14 7 14C8.9012 14 9.1392 13.9916 9.8861 13.958C10.6309 13.9237 11.1398 13.8054 11.585 13.6325C12.0522 13.4569 12.4756 13.1815 12.8254 12.8254C13.1815 12.4756 13.4569 12.0522 13.6325 11.585C13.8054 11.1398 13.9237 10.6309 13.958 9.8861C13.9916 9.1392 14 8.9012 14 7C14 5.0988 13.9916 4.8608 13.958 4.1139C13.9237 3.3691 13.8054 2.8602 13.6325 2.415C13.4569 1.94775 13.1815 1.52444 12.8254 1.1746C12.4756 0.818532 12.0523 0.543091 11.585 0.3675C11.1398 0.1946 10.6309 0.0763 9.8861 0.042C9.1392 0.00839996 8.9012 0 7 0ZM7 1.2614C8.869 1.2614 9.0902 1.2684 9.828 1.302C10.5112 1.3335 10.8815 1.4469 11.1286 1.5428C11.4548 1.6702 11.6886 1.8221 11.9336 2.0664C12.1786 2.3114 12.3298 2.5452 12.4572 2.8714C12.5524 3.1185 12.6672 3.4888 12.698 4.1713C12.7316 4.9098 12.7386 5.1303 12.7386 7C12.7386 8.869 12.7316 9.0902 12.698 9.828C12.6665 10.5112 12.5524 10.8815 12.4572 11.1286C12.345 11.4327 12.1661 11.7077 11.9336 11.9336C11.6886 12.1786 11.4548 12.3298 11.1286 12.4572C10.8815 12.5524 10.5112 12.6672 9.8287 12.698C9.0909 12.7316 8.8697 12.7386 7 12.7386C5.131 12.7386 4.9091 12.7316 4.172 12.698C3.4888 12.6665 3.1185 12.5524 2.8714 12.4572C2.56731 12.345 2.29223 12.1661 2.0664 11.9336C1.8339 11.7078 1.65498 11.4327 1.5428 11.1286C1.4469 10.8815 1.3328 10.5112 1.302 9.8287C1.2684 9.0902 1.2614 8.8697 1.2614 7C1.2614 5.131 1.2684 4.9098 1.302 4.172C1.3335 3.4888 1.4469 3.1185 1.5428 2.8714C1.6702 2.5452 1.8221 2.3114 2.0664 2.0664C2.3114 1.8214 2.5452 1.6702 2.8714 1.5428C3.1185 1.4469 3.4888 1.3328 4.1713 1.302C4.9098 1.2684 5.1303 1.2614 7 1.2614ZM7 9.3331C6.38122 9.3331 5.78779 9.08729 5.35025 8.64975C4.91271 8.21221 4.6669 7.61878 4.6669 7C4.6669 6.38122 4.91271 5.78779 5.35025 5.35025C5.78779 4.91271 6.38122 4.6669 7 4.6669C7.61878 4.6669 8.21221 4.91271 8.64975 5.35025C9.08729 5.78779 9.3331 6.38122 9.3331 7C9.3331 7.61878 9.08729 8.21221 8.64975 8.64975C8.21221 9.08729 7.61878 9.3331 7 9.3331V9.3331ZM7 3.4055C6.52796 3.4055 6.06055 3.49847 5.62444 3.67911C5.18834 3.85976 4.79208 4.12452 4.4583 4.4583C4.12452 4.79209 3.85976 5.18834 3.67911 5.62444C3.49847 6.06055 3.4055 6.52796 3.4055 7C3.4055 7.47204 3.49847 7.93945 3.67911 8.37556C3.85976 8.81166 4.12452 9.20791 4.4583 9.54169C4.79208 9.87548 5.18834 10.1402 5.62444 10.3209C6.06055 10.5015 6.52796 10.5945 7 10.5945C7.95332 10.5945 8.8676 10.2158 9.54169 9.54169C10.2158 8.8676 10.5945 7.95332 10.5945 7C10.5945 6.04668 10.2158 5.1324 9.54169 4.4583C8.8676 3.78421 7.95332 3.4055 7 3.4055V3.4055ZM11.5766 3.2634C11.5766 3.37371 11.5549 3.48294 11.5127 3.58485C11.4704 3.68677 11.4086 3.77937 11.3306 3.85737C11.2526 3.93537 11.16 3.99724 11.0581 4.03946C10.9561 4.08167 10.8469 4.1034 10.7366 4.1034C10.6263 4.1034 10.5171 4.08167 10.4151 4.03946C10.3132 3.99724 10.2206 3.93537 10.1426 3.85737C10.0646 3.77937 10.0028 3.68677 9.96054 3.58485C9.91833 3.48294 9.8966 3.37371 9.8966 3.2634C9.8966 3.04062 9.9851 2.82696 10.1426 2.66943C10.3002 2.5119 10.5138 2.4234 10.7366 2.4234C10.9594 2.4234 11.173 2.5119 11.3306 2.66943C11.4881 2.82696 11.5766 3.04062 11.5766 3.2634" fill="#000958" />
                                    </svg>



                                </a>
                            </span>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <Row>
                            <Col md={4} sm={6} xs={12} data-aos="fade-up" data-aos-duration="2000">
                                <ul className='mt-4 ps-0'>
                                    <li><p className='fw_400 fs_18 ff_Slackey clr_dark_blue'>Useful links</p></li>
                                    <li className='pt-3'><a className='fw_400 fs_14 ff_Poppins clr_grey home effect' href="#">FAQs</a></li>
                                    <li className='pt-3'><a className='fw_400 fs_14 ff_Poppins clr_grey home effect' href="#">Shop</a></li>
                                    <li className='pt-3'><a className='fw_400 fs_14 ff_Poppins clr_grey home effect' href="#">Privacy Policy</a></li>
                                    <li className='pt-3'><a className='fw_400 fs_14 ff_Poppins clr_grey home effect' href="#">Terms of Use</a></li>
                                    <li className='pt-3'><a className='fw_400 fs_14 ff_Poppins clr_grey home effect' href="#">Site Map</a></li>
                                </ul>
                            </Col>
                            <Col md={4} sm={6} xs={12} data-aos="fade-down" data-aos-duration="2000">
                                <ul className='mt-4 ps-0'>
                                    <li><p className='fw_400 fs_18 ff_Slackey clr_dark_blue'>Explore</p></li>
                                    <li className='pt-3'><a className='fw_400 fs_14 ff_Poppins clr_grey home effect' href="#">About Us</a></li>
                                    <li className='pt-3'><a className='fw_400 fs_14 ff_Poppins clr_grey home effect' href="#">Services</a></li>
                                    <li className='pt-3'><a className='fw_400 fs_14 ff_Poppins clr_grey home effect' href="#">Our Team</a></li>
                                    <li className='pt-3'><a className='fw_400 fs_14 ff_Poppins clr_grey home effect' href="#">Adopt Pet</a></li>
                                </ul>
                            </Col>
                            <Col md={4} sm={6} xs={12} data-aos="fade-up-left" data-aos-duration="2000">
                                <ul className='mt-4 ps-0'>
                                    <li><p className='fw_400 fs_18 ff_Slackey clr_dark_blue'>Contact Info</p></li>
                                    <li className='pt-3'><a className='fw_400 fs_14 ff_Poppins clr_grey home effect' href="#">361-777-5681</a></li>
                                    <li className='pt-3'><a className='fw_400 fs_14 ff_Poppins clr_grey home effect' href="#">654 White Avenue</a></li>
                                    <li className='pt-3'><a className='fw_400 fs_14 ff_Poppins clr_grey home effect' href="#">Portland, TX 78374</a></li>
                                </ul>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer