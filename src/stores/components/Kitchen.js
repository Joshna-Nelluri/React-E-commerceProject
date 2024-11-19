import React from 'react';
import { kitchenData } from '../data/kitchen';
import { Link } from 'react-router-dom';

const kitchenItems = () => {

    const firstFiveImages = kitchenData.slice(0, 6);

    return (
        <>
            <div className='proTitle'>
                <h2>Kitchen Items</h2>
            </div>
            <div className='proSection'>
                {
                    firstFiveImages.map((item) => {
                        return (
                            <div className='pro-Box'>
                                <Link to={`/kitchen/${item.id}`}>
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

export default kitchenItems