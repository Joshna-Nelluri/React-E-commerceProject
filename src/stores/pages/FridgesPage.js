
import React, { useState } from 'react';
import { fridgeData } from '../data/fridge';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const FridgesPage = () => {

    const [selectedProduct, setSelectedProduct] = useState([]);

    const companyHandler = (it) => {
        if (selectedProduct.includes(it)) {
            setSelectedProduct(selectedProduct.filter(item => item !== it))
        }
        else {
            setSelectedProduct([...selectedProduct, it])
        }
    }

    const filteredProduct = selectedProduct.length === 0 ? fridgeData : fridgeData.filter((i) => selectedProduct.includes(i.brand))
    return (
        <>
            <Navbar />
            <div className='fullPage'>
                <div className='pro-selected'>
                    {fridgeData.map((fridge) => {
                        return (
                            <div className='pro-input'>
                                <label>
                                    <input type='checkbox'
                                        checked = {selectedProduct.includes(fridge.brand)}
                                        onChange = {() => companyHandler(fridge.brand)}
                                    />
                                    {fridge.brand}
                                </label>
                            </div>
                        )
                    })}
                </div>
                <div className='pageSection'>
                    {filteredProduct.map((item) => {
                        return (
                            <div>
                                <Link to={`/fridges/${item.id}`}>
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

export default FridgesPage;

