import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Book from '../book/Book';

const Service = () => {
    const [book, setBook] = useState([]);
    useEffect(() => {
        fetch('./book.json')
            .then(res => res.json())
            .then(data => setBook(data))
    }
        , [])
    return (
        <div>
            <h1 className='text-white bg-success p-3'>Enroll your required courses.learn with fun</h1>
            <Row xs={1} md={3} lg={4} className="g-4 ms-3">
                    {
                        book.map(book => <Book
                            book={book}
                        ></Book>)
                    }
                </Row>
        </div>
    );
};

export default Service;