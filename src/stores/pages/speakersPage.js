import React, { useState } from 'react';
import { speakerData } from '../data/speaker';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const SpeakersPage = () => {

    const [selectedProduct, setSelectedProduct] = useState([]);

    const companyHandler = (it) => {
        if (selectedProduct.includes(it)) {
            setSelectedProduct(selectedProduct.filter(item => item !== it))
        }
        else {
            setSelectedProduct([...selectedProduct, it])
        }
    }

    const filteredProduct = selectedProduct.length === 0 ? speakerData : speakerData.filter((i) => selectedProduct.includes(i.brand))
    return (
        <>
            <Navbar />
            <div className='fullPage'>
                <div className='pro-selected'>
                    {speakerData.map((speaker) => {
                        return (
                            <div className='pro-input'>
                                <label>
                                    <input type='checkbox'
                                        checked = {selectedProduct.includes(speaker.brand)}
                                        onChange = {() => companyHandler(speaker.brand)}
                                    />
                                    {speaker.brand}
                                </label>
                            </div>
                        )
                    })}
                </div>
                <div className='pageSection'>
                    {filteredProduct.map((item) => {
                        return (
                            <div>
                                <Link to={`/speakers/${item.id}`}>
                                    <div className='pageImg'>
                                        <img src={item.image} alt='' />
                                    </div>
                                </Link>

                                <div className='proModel'>
                                    {item.brand}, {item.model}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default SpeakersPage
