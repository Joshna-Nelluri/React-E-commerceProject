
import React, { useState } from 'react';
import { womanData } from '../data/woman';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const WomansPage = () => {

    const [selectedProduct, setSelectedProduct] = useState([]);

    const companyHandler = (it) => {
        if (selectedProduct.includes(it)) {
            setSelectedProduct(selectedProduct.filter(item => item !== it))
        }
        else {
            setSelectedProduct([...selectedProduct, it])
        }
    }

    const filteredProduct = selectedProduct.length === 0 ? womanData : womanData.filter((i) => selectedProduct.includes(i.brand))
    return (
        <>
            <Navbar />
            <div className='fullPage'>
                <div className='pro-selected'>
                    {womanData.map((dress) => {
                        return (
                            <div className='pro-input'>
                                <label>
                                    <input type='checkbox'
                                        checked = {selectedProduct.includes(dress.brand)}
                                        onChange = {() => companyHandler(dress.brand)}
                                    />
                                    {dress.brand}
                                </label>
                            </div>
                        )
                    })}
                </div>
                <div className='pageSection'>
                    {filteredProduct.map((item) => {
                        return (
                            <div>
                                <Link to={`/woman/${item.id}`}>
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

export default WomansPage

