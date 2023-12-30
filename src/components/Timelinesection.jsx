import React from 'react'
import roadmap from '../assets/images/roadmap.png'
import { Container } from 'react-bootstrap'

const Timelinesection = () => {
    return (
        <section className='py-5'>
            <h2 className='color-white fs-xl ff-SansUber fw-normal text-center pb-5'>Roadmap</h2>
            <div className='py-90 d-none d-lg-block'>
                <Container className='py-5 position-relative'>
                    <div className='position-relative'>
                        <img src={roadmap} alt="roadmap" />
                        <span className='roundellipse'>
                            <svg width="275" height="550" viewBox="0 0 275 550" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 548.179C0 549.185 0.816925 550.001 1.82251 549.994C74.0989 549.516 143.312 520.597 194.454 469.454C246.027 417.882 275 347.935 275 275C275 202.066 246.027 132.118 194.454 80.5457C143.312 29.4029 74.099 0.484417 1.8226 0.00603143C0.816986 -0.000624493 6.10352e-05 0.815221 6.10352e-05 1.82085C6.10352e-05 2.82647 0.816986 3.64106 1.82257 3.64781C73.1331 4.12613 141.419 32.6609 191.879 83.1207C242.769 134.01 271.358 203.031 271.358 275C271.358 346.969 242.769 415.99 191.879 466.879C141.419 517.339 73.1331 545.874 1.82251 546.352C0.816925 546.359 0 547.174 0 548.179Z" fill="#FDDA60" />
                            </svg>
                        </span>
                    </div>
                    <div className='d-flex align-items-center gap-4 roadmapline timeline'>
                        <span><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="15" cy="15" r="15" fill="#FDDA60" />
                        </svg></span>
                        <span><svg className='d-none d-xl-block' width="179" height="12" viewBox="0 0 179 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM167.667 6.00001C167.667 8.94553 170.054 11.3333 173 11.3333C175.946 11.3333 178.333 8.94553 178.333 6.00002C178.333 3.0545 175.946 0.666681 173 0.666681C170.054 0.666681 167.667 3.0545 167.667 6.00001ZM6 7L173 7.00001L173 5.00001L6 5L6 7Z" fill="#fff" />
                        </svg>
                        </span>
                        <div className='roadmap-circle d-flex align-items-center justify-content-center'>
                            <p className='color-black fw-extrabold fs-s ff-montserrat mb-0'>20%</p>
                        </div>
                        <div className='ps-2'>
                            <h2 className='color-white fw-normal fs-s ff-SansUber mb-0'>Phase 1</h2>
                            <p className='color-white fw-normal ff-montserrat fs-xs max-w-593 mb-0 lh-160'>Mi amet elementum, posuere tempus odio eu lacinia. Natoque arcu viverra ullamcorper condimentum massa laoree</p>
                        </div>

                    </div>
                    <div className='d-flex align-items-center gap-4 roadmapline2 timeline'>
                        <span><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="15" cy="15" r="15" fill="#FDDA60" />
                        </svg></span>
                        <span className='d-none d-xl-block'><svg width="109" height="12" viewBox="0 0 109 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM97.6667 6.00001C97.6667 8.94553 100.054 11.3333 103 11.3333C105.946 11.3333 108.333 8.94553 108.333 6.00001C108.333 3.05449 105.946 0.666675 103 0.666675C100.054 0.666675 97.6667 3.05449 97.6667 6.00001ZM6 7L103 7.00001L103 5.00001L6 5L6 7Z" fill="white" />
                        </svg>
                        </span>
                        <div>
                            <div className='roadmap-circle d-flex align-items-center justify-content-center'>
                                <p className='color-black fw-extrabold fs-s ff-montserrat mb-0'>40%</p>
                            </div>
                        </div>
                        <div className='ps-2'>
                            <h2 className='color-white fw-normal fs-s ff-SansUber mb-0'>Phase 2</h2>
                            <p className='color-white fw-normal ff-montserrat fs-xs max-w-593 mb-0 lh-160'>Amet viverra diam netus aenean at mauris, facilisis quis. Urna euismod sed ultricies arcu ullamcorper </p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center gap-4 roadmapline3 timeline'>
                        <span><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="15" cy="15" r="15" fill="#FDDA60" />
                        </svg></span>
                        <span className='d-none d-xl-block'><svg width="123" height="12" viewBox="0 0 123 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6ZM111.667 6C111.667 8.94552 114.054 11.3333 117 11.3333C119.946 11.3333 122.333 8.94552 122.333 6C122.333 3.05448 119.946 0.666667 117 0.666667C114.054 0.666667 111.667 3.05448 111.667 6ZM6 7H117V5H6V7Z" fill="white" />
                        </svg>
                        </span>
                        <div>
                            <div className='roadmap-circle d-flex align-items-center justify-content-center'>
                                <p className='color-black fw-extrabold fs-s ff-montserrat mb-0'>60%</p>
                            </div>
                        </div>
                        <div className='ps-2'>
                            <h2 className='color-white fw-normal fs-s ff-SansUber mb-0'>Phase 3</h2>
                            <p className='color-white fw-normal ff-montserrat fs-xs max-w-593 mb-0 lh-160'>Hendrerit massa non sed sit. Lobortis in pulvinar lectus ut in elit nibh faucibus mauris. </p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center gap-4 roadmapline4 timeline'>
                        <span><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="15" cy="15" r="15" fill="#FDDA60" />
                        </svg></span>
                        <span className='d-none d-xl-block'><svg width="97" height="12" viewBox="0 0 97 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM85.6667 6.00001C85.6667 8.94553 88.0545 11.3333 91 11.3333C93.9455 11.3333 96.3333 8.94553 96.3333 6.00001C96.3333 3.05449 93.9455 0.666674 91 0.666674C88.0545 0.666674 85.6667 3.05449 85.6667 6.00001ZM6 7L91 7.00001L91 5.00001L6 5L6 7Z" fill="white" />
                        </svg>
                        </span>
                        <div>
                            <div className='roadmap-circle d-flex align-items-center justify-content-center'>
                                <p className='color-black fw-extrabold fs-s ff-montserrat mb-0'>80%</p>
                            </div>
                        </div>
                        <div className='ps-2'>
                            <h2 className='color-white fw-normal fs-s ff-SansUber mb-0'>Phase 4</h2>
                            <p className='color-white fw-normal ff-montserrat fs-xs max-w-593 mb-0 lh-160'>Ut egestas lacus nec varius blandit volutpat, malesuada nunc, nisl. Nisl mattis convallis lacus tristique.</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center gap-4 roadmapline5 timeline'>
                        <span><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="15" cy="15" r="15" fill="#FDDA60" />
                        </svg></span>
                        <span className='d-none d-xl-block'><svg width="133" height="12" viewBox="0 0 133 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM121.667 6.00001C121.667 8.94553 124.054 11.3333 127 11.3333C129.946 11.3333 132.333 8.94553 132.333 6.00001C132.333 3.05449 129.946 0.666677 127 0.666677C124.054 0.666677 121.667 3.05449 121.667 6.00001ZM6 7L127 7.00001L127 5.00001L6 5L6 7Z" fill="white" />
                        </svg>
                        </span>
                        <div>
                            <div className='roadmap-circle d-flex align-items-center justify-content-center'>
                                <p className='color-black fw-extrabold fs-s ff-montserrat mb-0'>100%</p>
                            </div>
                        </div>
                        <div className='ps-2'>
                            <h2 className='color-white fw-normal fs-s ff-SansUber mb-0'>Phase 5</h2>
                            <p className='color-white fw-normal ff-montserrat fs-xs max-w-593 mb-0 lh-160'>Faucibus congue risus nisl dictum. A, viverra malesuada nunc varius. Ut dignissim mauris eu sed nisl neque. </p>
                        </div>
                    </div>
                </Container>
            </div>
            <div className=' container d-block d-lg-none'>
                <div className='d-flex align-items-center justify-content-center'>
                    <img src={roadmap} alt="roadmap" className='text-center' />
                </div>
                <div className='roadmaplinee z-2'>
                    <div className='d-flex gap-3 pt-5 timeline'>
                        <div>
                            <div className='roadmap-circle d-flex align-items-center justify-content-center'>
                                <p className='color-black fw-extrabold fs-s ff-montserrat mb-0'>20%</p>
                            </div>
                        </div>
                        <div className='ps-2'>
                            <h2 className='color-white fw-normal fs-s ff-SansUber mb-0'>Phase 1</h2>
                            <p className='color-white fw-normal ff-montserrat fs-xs max-w-593 mb-0 lh-160'>Mi amet elementum, posuere tempus odio eu lacinia. Natoque arcu viverra ullamcorper condimentum massa laoree</p>
                        </div>
                    </div>
                    <div className='d-flex gap-3 pt-5 timeline'>
                        <div>
                            <div className='roadmap-circle d-flex align-items-center justify-content-center'>
                                <p className='color-black fw-extrabold fs-s ff-montserrat mb-0'>40%</p>
                            </div>
                        </div>
                        <div className='ps-2'>
                            <h2 className='color-white fw-normal fs-s ff-SansUber mb-0'>Phase 2</h2>
                            <p className='color-white fw-normal ff-montserrat fs-xs max-w-593 mb-0 lh-160'>Amet viverra diam netus aenean at mauris, facilisis quis. Urna euismod sed ultricies arcu ullamcorper </p>
                        </div>
                    </div>
                    <div className='d-flex gap-3 pt-5 timeline'>
                        <div>
                            <div className='roadmap-circle d-flex align-items-center justify-content-center'>
                                <p className='color-black fw-extrabold fs-s ff-montserrat mb-0'>60%</p>
                            </div>
                        </div>
                        <div className='ps-2'>
                            <h2 className='color-white fw-normal fs-s ff-SansUber mb-0'>Phase 3</h2>
                            <p className='color-white fw-normal ff-montserrat fs-xs max-w-593 mb-0 lh-160'>Hendrerit massa non sed sit. Lobortis in pulvinar lectus ut in elit nibh faucibus mauris. </p>
                        </div>
                    </div>
                    <div className='d-flex gap-3 pt-5 timeline'>
                        <div>
                            <div className='roadmap-circle d-flex align-items-center justify-content-center'>
                                <p className='color-black fw-extrabold fs-s ff-montserrat mb-0'>80%</p>
                            </div>
                        </div>
                        <div className='ps-2'>
                            <h2 className='color-white fw-normal fs-s ff-SansUber mb-0'>Phase 4</h2>
                            <p className='color-white fw-normal ff-montserrat fs-xs max-w-593 mb-0 lh-160'>Ut egestas lacus nec varius blandit volutpat, malesuada nunc, nisl. Nisl mattis convallis lacus tristique.</p>
                        </div>
                    </div>
                    <div className='d-flex gap-3 pt-5 timeline'>
                        <div>
                            <div className='roadmap-circle d-flex align-items-center justify-content-center'>
                                <p className='color-black fw-extrabold fs-s ff-montserrat mb-0'>100%</p>
                            </div>
                        </div>
                        <div className='ps-2'>
                            <h2 className='color-white fw-normal fs-s ff-SansUber mb-0'>Phase 5</h2>
                            <p className='color-white fw-normal ff-montserrat fs-xs max-w-593 mb-0 lh-160'>Faucibus congue risus nisl dictum. A, viverra malesuada nunc varius. Ut dignissim mauris eu sed nisl neque. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex align-items-center justify-content-center pt-5'>
                <button className='ff-SansUber fs-s fw-normal color-black roadmapbtn'> Read Our Whitepaper</button>
            </div>
        </section>
    )
}

export default Timelinesection