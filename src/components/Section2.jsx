import React from 'react'
import watches from '../assets/images/watches.png'
import { Container, Row, Col } from 'react-bootstrap'
import boats from '../assets/images/boats.png'
import cars from '../assets/images/cars.png'

function Section2() {
    return (
        <div className='light-black py-5'>
            <Container className='py-5'>
                <Row>
                    <Col lg={6} className='d-flex  justify-content-center flex-column text-c-center'>
                        <h2 className='ff-SansUber fw-normal fs-xl lh-109 text-white'>About </h2>
                        <p className='ff-montserrat fw-normal fs-xs lh-160 text-white max-w-520 mx-a'>Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. Erat nam molestie. Vitae mollis lacus senectus mattis nisl. Porta , adipiscing sed mus diam amet, ac sed tellus. </p>
                    </Col>
                    <Col lg={6} className='position-relative z-2'>
                        <img src={watches} alt="watches" className='w-100' />
                        <div className='ellipsee'></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Section2