import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './about.css'

const About = () => {

    const img1 = 'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?k=20&m=1179420343&s=612x612&w=0&h=G2UGMVSzAXGAQs3pFZpvWlHNRAzwPIWIVtSOxZHsEuc='
    const img2 = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
    const img3 = 'https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg'
    const img4 = 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    return (
        <div>
            <h2 className='p-3'>Our team Member</h2>
            <Row xs={1} md={2} lg={4} className="m-3 g-4">

                <Col>
                    <Card>
                        <Card.Img className='imgg' variant={img3} src={img1} />
                        <Card.Body>
                            <Card.Title>ATAUR RAHMAN</Card.Title>
                            <p>
                                Proffessor of Mathematics
                            </p>
                            <p>Email:amirataur@gmail.com</p>

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img  className='imgg'  variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>SAYDUR  RAHMAN</Card.Title>
                            <p>
                                Developer
                            </p>
                            <p>Email:amirataur@gmail.com</p>

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img className='imgg'  variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>ABDUR RAHMAN</Card.Title>
                            <p>
                                CSE engeeniar
                            </p>
                            <p>Email:abdur@gmail.com</p>

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img className='imgg'  variant="top" src={img4}/>
                        <Card.Body>
                            <Card.Title>SAJIDUR RAHMAN</Card.Title>
                            <p>
                                WEB developer
                            </p>
                            <p>Email:sajedur@gmail.com</p>

                        </Card.Body>
                    </Card>
                </Col>

                ))
            </Row>
        </div>
    );
};

export default About;