import React from 'react';
// import { useState } from 'react';
import { acData } from '../stores/data/ac';
import { useParams } from 'react-router-dom';
import Navbar from '../stores/components/Navbar';
import { useCart } from '../stores/context/CartContext';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const AcSingle = () => {
  const { id } = useParams();
  // const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = acData.find((item) => item.id === id);
  // console.log(id);

  // const [selectedProduct, setSelectedProduct] = useState([]);

  // const companyHandler = (it) => {
  //   if (selectedProduct.includes(it)) {
  //     setSelectedProduct(selectedProduct.filter(item => item !== it));
  //   }
  //   else {
  //     setSelectedProduct([...selectedProduct, it])
  //   }
  // }

  // const backBtn = () => {
  //   window.history.back();
  // }
  // const filteredProduct = selectedProduct.length === 0 ? acData : acData.filter((i) => selectedProduct.includes(i.company));

  return (
    <>
      <Navbar />
      <div className='single'>
        <div className='pro-selected'>
          {acData.map((ac) => {
            return (
              <div className='pro-input'>
                <label>
                  <input type='checkbox'
                    // checked={selectedProduct.includes(ac.company)}
                    // onChange={() => companyHandler(ac.company)}
                  />
                  {ac.company}
                </label>
              </div>
            )
          })}
        </div>
        <div className='back'>
          <button onClick={() => window.history.go(-1)} className='backBtn'>Back</button>
        </div>
    
        <div className='ind-section'>
        
          <div className='ind-image'>
            <img src={product.image} alt='' />
          </div>

          <div className='ind-details space'>
            <div className='ind-company'>
              <h2>{product.company}</h2>
            </div>
            <div className='ind-model space'>
              <h3>{product.model}</h3>
            </div>
            <div className='ind-price space'>
              <h2>{product.price}</h2>
            </div>
            <div className='ind-desc space'>
              <h2>{product.description}</h2>
            </div>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default AcSingle;
