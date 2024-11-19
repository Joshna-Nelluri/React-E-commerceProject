import React from 'react';
import { booksData } from '../data/books';
import { Link } from 'react-router-dom';

const BooksData = () => {

    const firstFiveImages = booksData.slice(0, 6);

    return (
        <>
            <div className='proTitle'>
                <h2>Books</h2>
            </div>

            <div className='proSection'>
                {
                    firstFiveImages.map((item) => {
                        return (
                            <div className='proBox'>
                                <Link to={`/books/${item.id}`}>
                                    <div>
                                        <img src={item.image} alt={item.title} className='proBookImage' />
                                    </div>
                                </Link>
                                <p className='proBook-details'>{item.title}</p>
                            </div>
                        )
                    })
                }

            </div>
        </>

    )
}

export default BooksData
