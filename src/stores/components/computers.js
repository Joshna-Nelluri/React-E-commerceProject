import React from 'react';
import { computerData } from '../data/computers';
import { Link } from 'react-router-dom';

const computers = () => {
    const firstFiveImages = computerData.slice(0, 6);
    return (
        <>
            <div className='proTitle'>
                <h2>Computers</h2>
            </div>
            <div className='proSection'>
                {
                    firstFiveImages.map((item) => {
                        return (
                            <div className='pro-Box'>
                                
                                <Link to={`/computers/${item.id}`}>
                                    <div>
                                        <img src={item.image} alt={item.model} className="pro-Image" />
                                    </div>
                                </Link>
                                <p className='pro-Box-details'>{item.company}</p>
                            </div>

                        )
                    })
                }

            </div>
        </>
    )
}

export default computers;
