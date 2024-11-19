import React from 'react';
import { acData } from '../data/ac';
import { Link } from 'react-router-dom';

const AcData = () => {

    const firstFiveImages = acData.slice(0, 6);

    return (
        <>
            <div className='proTitle'>
                <h2>Air Condition</h2>
            </div>

            <div className='proSection'>
                {
                    firstFiveImages.map((item) => {
                        return (
                            <>
                                <div className='pro-Box'>
                                    <Link to={`/ac/${item.id}`}>
                                        <div>
                                            <img src={item.image} alt='' className='pro-Image' />
                                        </div>
                                    </Link>
                                    <p className='pro-Box-details'>{item.company}</p>
                                </div>
                                {/* <div>
                                    {item.brand}
                                </div> */}

                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default AcData;
