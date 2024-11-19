
import React, { useState } from 'react';
import { watchData } from '../data/watch';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const WatchesPage = () => {

    const [selectedProduct, setSelectedProduct] = useState([]);

    const companyHandler = (it) => {
        if (selectedProduct.includes(it)) {
            setSelectedProduct(selectedProduct.filter(item => item !== it))
        }
        else {
            setSelectedProduct([...selectedProduct, it])
        }
    }

    const filteredProduct = selectedProduct.length === 0 ? watchData : watchData.filter((i) => selectedProduct.includes(i.brand))
    return (
        <>
            <Navbar />
            <div className='fullPage'>
                <div className='pro-selected'>
                    {watchData.map((phone) => {
                        return (
                            <div className='pro-input'>
                                <label>
                                    <input type='checkbox'
                                        checked = {selectedProduct.includes(phone.brand)}
                                        onChange = {() => companyHandler(phone.brand)}
                                    />
                                    {phone.brand}
                                </label>
                            </div>
                        )
                    })}
                </div>
                <div className='pageSection'>
                    {filteredProduct.map((item) => {
                        return (
                            <div>
                                <Link to={`/watches/${item.id}`}>
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

export default WatchesPage
