import React from 'react';
import { speakerData } from '../data/speaker';
import { Link } from 'react-router-dom';

const SpeakerData = () => {

    const firstFiveImages = speakerData.slice(0, 6);

    return (
        <>
            <div className='proTitle'>
                <h2>Air Condition</h2>
            </div>

            <div className='proSection'>
                {
                    firstFiveImages.map((item) => {
                        return (
                            <div className='pro-Box'>
                                <Link to={`/speakers/${item.id}`}>
                                    <div className='pro-Image'>
                                        <img src={item.image} alt='' />
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

export default SpeakerData;