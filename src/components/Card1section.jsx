import React from 'react'
import { Container, Card } from 'react-bootstrap'
import Cardsection from './Cardsection'

const Card1section = () => {
    return (
        <div>
            <div className='light-black'>
                <Container>
                    <Card.Header className='ff-SansUber fw-normal fs-xl lh-109 text-white text-center'> Utilities</Card.Header>
                    <Cardsection />
                </Container>
            </div>
        </div>
    )
}
export default Card1section