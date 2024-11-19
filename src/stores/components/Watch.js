import React from 'react';
import { watchData } from '../data/watch';
import { Link } from 'react-router-dom';

const Watches = () => {

    const firstFiveImages = watchData.slice(0, 6);

    return (
        <>
            <div className='proTitle'>
                <h2>Watches</h2>
            </div>

            <div className='proSection'>
                {
                    firstFiveImages.map((item) => {
                        return (
                            <div className='pro-Box'>
                            
                                <Link to={`/watches/${item.id}`}>
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

export default Watches
