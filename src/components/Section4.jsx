import React from 'react'
import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap'
import wineimg from '../assets/images/wineimg.png'

const Section4 = () => {
    const [count, setCount] = useState(1);
    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }
    if (count == 10) {
        document.getElementById("addzero").style.display = "none"
    } else if (count == 9) {
        document.getElementById("addzero").style.display = "block"
    }
    return (
        <section className='bg-img py-5 position-relative z-2 overflow-hidden'>
            <Container>
                <Row>
                    <Col lg={6} className='d-flex align-items-center justify-content-center'>
                        <img src={wineimg} alt="wineimg" className='w-img' />
                    </Col>
                    <Col lg={6} className='d-flex justify-content-center flex-column pt-5 pt-lg-0 mx-auto'>
                        <div className='max-w-511 mx-auto'>
                            <h2 className='color-white fs-xl fw-normal ff-SansUber lh-108'>Mint NFT</h2>
                            <Row className='pt-4'>
                                <Col className='col-6'>
                                    <h3 className='color-white fs-lg ff-montserrat fw-extrabold'>9999 </h3>
                                    <p className='color-white fs-xs fw-normal lh-160 ff-montserrat'>of 10,000 minted</p>
                                </Col>
                                <Col className='col-6'>
                                    <h3 className='color-white fs-lg ff-montserrat fw-extrabold'>.2 ETH</h3>
                                    <p className='color-white fs-xs fw-normal lh-160 ff-montserrat'>per NFT</p>
                                </Col>
                                <Col className='pt-3 col-6'>
                                    <h3 className='color-white fs-lg ff-montserrat fw-extrabold'>Max 9</h3>
                                    <p className='color-white fs-xs fw-normal lh-160 ff-montserrat'>NFTs per transaction</p>
                                </Col>
                                <Col className='pt-3 col-6'>
                                    <h3 className='color-white fs-lg ff-montserrat fw-extrabold'>Max 2</h3>
                                    <p className='color-white fs-xs fw-normal lh-160 ff-montserrat'>Transaction per wallet</p>
                                </Col>
                            </Row>
                            <div className='max-w-4 94 pt-4'>
                                <div className='d-flex align-items-center gap-3'>
                                    <Button className="counter-btn color-black ff-montserrat fw-extrabold lh-109 fs-lg pb-2" onClick={decrement}>-</Button>
                                    <div className="count-btn d-flex align-items-center justify-content-center">
                                        <p className="mx-auto color-white lh-109 text-center mb-0 fw-extrabold  fs-lg ff-montserrat">
                                            {" "}<span id='addzero'>0</span>
                                            {count}
                                        </p>
                                    </div>
                                    <Button
                                        onClick={() => setCount(count + 1)}
                                        className="counter-btn color-black fw-extrabold lh-109 fs-lg ff-montserrat pb-2"
                                    >
                                        +
                                    </Button>
                                </div>
                                <button className='color-black ff-SansUber fs-md fw-normal mintnow mt-4'>MINT NOW</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='ellipse-1'></div>
            <div className='ellipse-2'></div>

        </section>
    )
}

export default Section4
