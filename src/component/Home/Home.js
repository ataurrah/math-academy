import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Book from '../book/Book';
import './home.css'

const Home = () => {
    const [book, setBook] = useState([]);
    useEffect(() => {
        fetch('./book.json')
            .then(res => res.json())
            .then(data => setBook(data))
    }
        , [])

    const imgpic = 'https://www.thoughtco.com/thmb/V5OkdgsfILDVDNYHK4uhCqYmHjw=/1500x844/smart/filters:no_upscale()/common-mathematic-symbols-2312232_final_CORRECTED-d1b3858039ce4668b3ae0b028da7a258.png'
    return (
        <div>
            <div className="d-flex mx-3">
                <div className='col-md-5 home'>
                    <h4 className='fw-bold p-3'>PREPARING STUDENTS FOR THE TOP UNIVERSITY MATH & SCIENCE PROGRAMS IN THE WORLD..
                    </h4>
                    <p>Simply put, the goal of Math Academy is to develop middle-school and high-school students with the passion, skills and insight to excel in the honors math and science programs of the most elite universities in the world.</p>
                </div>
                <div className='col-md-7'>
                    <img className='img-fluid py-2' src={imgpic} alt="" />
                </div>
            </div>

            <div>
                <h3 className='bg-primary text-white p-3'>Our Populer Courses</h3>
                <Row xs={1} md={3} lg={4} className="g-4 ms-3">
                    {
                        book.slice(0, 4).map(book => <Book
                            book={book}
                        ></Book>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Home;