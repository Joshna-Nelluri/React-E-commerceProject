import React from 'react';
import { furnitureData } from '../stores/data/furniture';
import { useParams } from 'react-router-dom';
import Navbar from '../stores/components/Navbar';
import { useCart } from '../stores/context/CartContext';

const FurnitureSingle = () => {
  const { id } = useParams();

  const { addToCart } = useCart();

  const product = furnitureData.find((item) => item.id === id);
  // console.log(id);

  // const [selectedBrands, setSelectedBrands] = useState([]);
  // const companyHandler = (brand) => {
  //   if (selectedBrands.includes(brand)) {
    
  //     setSelectedBrands(selectedBrands.filter(item => item !== brand));
  //   } 
  //   else {

  //     setSelectedBrands([...selectedBrands, brand]);
  //   }
  // };


  const uniqueBrands = [];
  furnitureData.forEach(item => {
    if (!uniqueBrands.includes(item.brand)) {
      uniqueBrands.push(item.brand); 
    }
  });

  return (
    <>
      <Navbar />
      <div className='single'>

  
      <div className="pro-selected">
          {uniqueBrands.map((brand) => (
            <div key={brand} className="pro-input">
              <label>
                <input
                  type="checkbox"
                  // checked={selectedBrands.includes(brand)}
                  // onChange={() => companyHandler(brand)} 
                />
                {brand}
              </label>
            </div>
          ))}
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

export default FurnitureSingle;
