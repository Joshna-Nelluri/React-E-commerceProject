import React from 'react';
import { tvData } from '../data/tv';
import { Link } from 'react-router-dom';

const tv = () => {

    const firstFiveImages = tvData.slice(0, 6);

    return (
        <>
            <div className='proTitle'>
                <h2>Tv's</h2>
            </div>
            <div className='proSection'>
                {
                    firstFiveImages.map((item) => {
                        return (
                            <div className='pro-Box'>
                                <Link to={`/tv/${item.id}`}>
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

export default tv
