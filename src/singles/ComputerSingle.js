import React from 'react';
import { computerData } from '../stores/data/computers';
import { useParams } from 'react-router-dom';
import Navbar from '../stores/components/Navbar';
import { useCart } from '../stores/context/CartContext';

const ComputerSingle = () => {
  const { id } = useParams();

  const { addToCart } = useCart();

  const product = computerData.find((item) => item.id === id);
  // console.log(id);


    // const [selectedProduct, setSelectedProduct] = useState([]);

    // const companyHandler = (company) => {
    //   if (selectedProduct.includes(company)) {
    //     setSelectedProduct(selectedProduct.filter(item => item !== company));
    //   }
    //   else {

    //     setSelectedProduct([...selectedProduct, company]);
    //   }
    // };


    const uniqueCompanies = [];
    computerData.forEach(item => {
      if (!uniqueCompanies.includes(item.company)) {
        uniqueCompanies.push(item.company);
      }
    });

    return (
      <>
        <Navbar />
        <div className='single'>
          <div className="pro-selected">
            {uniqueCompanies.map((company) => (

              <div key={company} className="pro-input">
                <label>
                  <input
                    type="checkbox"
                    // checked={selectedProduct.includes(company)}
                    // onChange={() => companyHandler(company)}
                  />
                  {company}
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

  export default ComputerSingle;
