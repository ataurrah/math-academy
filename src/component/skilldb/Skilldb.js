import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Skilldb = (props) => {
    const { name, price, instractor, img } = props.skill
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

export default Skilldb;