import React, { useState } from 'react';
import { acData } from '../data/ac';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const AcPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHandler = (it) => {
    if (selectedProduct.includes(it)) {
      setSelectedProduct(selectedProduct.filter(item => item !== it));
    }
    else {
      setSelectedProduct([...selectedProduct, it]);
    }
  }
  const filteredProduct = selectedProduct.length === 0 ? acData : acData.filter((i) => selectedProduct.includes(i.company));
  return (
    <>
      <Navbar />
      <div className='fullPage'>
        <div className='pro-selected'>
          {acData.map((ac) => {
            return (
              <div className='pro-input'>
                <label>
                  <input type='checkbox'
                    checked={selectedProduct.includes(ac.company)}
                    onChange={() => companyHandler(ac.company)}
                  />
                  {ac.company}
                </label>
              </div>
            )
          })}
        </div>
        <div className='pageSection'>
          {filteredProduct.map((item) => {
            return (
              <div>
                <Link to={`/ac/${item.id}`}>
                  <div className='pageImg'>
                    <img src={item.image} alt='' />
                  </div>
                </Link>

                <div className='proModel'>
                  {item.company}, {item.model}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default AcPage
