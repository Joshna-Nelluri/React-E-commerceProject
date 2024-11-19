import React from 'react';
import { womanData } from '../data/woman';
import { Link } from 'react-router-dom';

const WomensWear = () => {

    const firstFiveImages = womanData.slice(0, 6);

    return (
        <>
            <div className='proTitle'>
                <h2>Womens Wear</h2>
            </div>
            <div className='proSection'>
                {
                    firstFiveImages.map((item) => {
                        return (
                            <div className='pro-Box'>
                                <Link to={`/woman/${item.id}`}>
                                    <div>
                                        <img src={item.image} alt='' className='pro-Image' />
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

export default WomensWear;
