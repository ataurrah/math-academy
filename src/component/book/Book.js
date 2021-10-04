import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './book.css'
const Book = (props) => {
    const { name, price, instractor, img } = props.book
    console.log(props);
    return (
        <div>
            <Col className='py-3'>
                <Card className="card-style">
                    <Card.Img className='card-image' variant="top w-75" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <p>Instractor:{instractor}</p>
                        <p>{price}</p>
                        <button className='bg-primary text-white'>Enroll now</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Book;