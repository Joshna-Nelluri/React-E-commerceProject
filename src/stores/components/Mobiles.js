import React from 'react';
import { mobileData } from '../data/mobiles';
import { Link } from 'react-router-dom';


const Mobiles = () => {

    const firstFiveImages = mobileData.slice(0, 6);

    return (
        <>
            <div className='proTitle'>
                <h2>Mobiles</h2>
            </div>
            <div className='proSection'>
                {
                    firstFiveImages.map((item) => {
                        return (
                            <>
                                <div className='pro-Box'>

                                <Link to={`/mobiles/${item.id}`}>
                                    <div>
                                        <img src={item.image} alt='' className='pro-Image' />
                                    </div>
                                    
                                </Link>
                                <p className='pro-Box-details'>{item.company}</p>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Mobiles
