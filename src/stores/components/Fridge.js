import React from 'react';
import { fridgeData } from '../data/fridge';
import { Link } from 'react-router-dom';

const FridgeData = () => {

    const firstFiveImages = fridgeData.slice(0, 6);

    return (
        <>
            <div className='proTitle'>
                <h2>Fridges</h2>
            </div>

            <div className='proSection'>
                {
                    firstFiveImages.map((item) => {
                        return (
                            <div className='pro-Box'>
                                <Link to={`/fridges/${item.id}`}>
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

export default FridgeData;
