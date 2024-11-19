import React from 'react';
import { watchData } from '../stores/data/watch';
import { useParams } from 'react-router-dom';
import Navbar from '../stores/components/Navbar';
import { useCart } from '../stores/context/CartContext';

const WatchSingle = () => {
  const { id } = useParams();

  const { addToCart } = useCart();

  const product = watchData.find((item) => item.id === id);
  console.log(id);

  // const [selectedProduct, setSelectedProduct] = useState([]);

  // const companyHandler = (it) => {
  //   if (selectedProduct.includes(it)) {
  //     setSelectedProduct(selectedProduct.filter(item => item !== it))
  //   }
  //   else {
  //     setSelectedProduct([...selectedProduct, it])
  //   }
  // }


  return (
    <>
      <Navbar />
      <div className='single'>
        <div className='pro-selected'>
          {watchData.map((phone) => {
            return (
              <div className='pro-input'>
                <label>
                  <input type='checkbox'
                    // checked={selectedProduct.includes(phone.brand)}
                    // onChange={() => companyHandler(phone.brand)}
                  />
                  {phone.brand}
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
              <h2>{product.brand}</h2>
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

export default WatchSingle;