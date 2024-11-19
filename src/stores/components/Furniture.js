import React from 'react';
import { furnitureData } from '../data/furniture';
import { Link } from 'react-router-dom';

const Furniture = () => {

    const firstFiveImages = furnitureData.slice(0, 6);

    return (
        <>
            <div className='proTitle'>
                <h2>Furniture</h2>
            </div>
            <div className='proSection'>
                {
                    firstFiveImages.map((item) => {
                        return (
                            <div className='pro-Box'>
                                <Link to={`/furniture/${item.id}`}>
                                    <div>
                                        <img src={item.image} alt={item.model} className="pro-Image" />
                                    </div>
                                </Link>
                                <p className='pro-Box-details'>{item.brand}</p>
                            </div>

                        )
                    })
                }
            </div>
        </>

    )
}

export default Furniture
