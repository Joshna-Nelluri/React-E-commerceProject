import React from 'react';
import { menData } from '../data/men';
import { Link } from 'react-router-dom';

const Watches = () => {

    const firstFiveImages = menData.slice(0, 6);

    return (
        <>
            <div className='proTitle'>
                <h2>Mens Wear</h2>
            </div>
            <div className='proSection'>
                {
                    firstFiveImages.map((item) => {
                        return (
                            <div className='pro-Box'>
                                <Link to={`/men/${item.id}`}>
                                    <div>
                                        <img src={item.image} alt=''  className='pro-Image' />
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

export default Watches
