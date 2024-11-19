import React from 'react';
import { mobileData } from '../stores/data/mobiles';
import { useParams } from 'react-router-dom';
import Navbar from '../stores/components/Navbar';
import { useCart } from '../stores/context/CartContext';

const MobileSingle = () => {
  const { id } = useParams();

  const { addToCart } = useCart();

  const product = mobileData.find((item) => item.id === id);
  // console.log("product", product);
  // console.log(id);

  // const [selectedProduct, setSelectedProduct] = useState([]);

  //   const companyHandler = (it) => {
  //       if (selectedProduct.includes(it)) {
  //           setSelectedProduct(selectedProduct.filter(item => item !== it));
  //       }
  //       else {
  //           setSelectedProduct([...selectedProduct, it])
  //       }
  //   }

  return (
    <>
      <Navbar />
      <div className='single'>

      <div className='pro-selected'>
                    {mobileData.map((phone) => {
                        return (
                            <div className='pro-input'>
                                <label>
                                    <input type='checkbox'
                                        // checked={selectedProduct.includes(phone.company)}
                                        // onChange={() => companyHandler(phone.company)}
                                    />
                                    {phone.company}
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

export default MobileSingle;








// import React from 'react';
// import { useParams } from 'react-router-dom';
// import Navbar from '../stores/components/Navbar';
// import { useCart } from '../stores/context/CartContext';

// // Import data for each category
// import { mobileData } from '../stores/data/mobiles';
// import { computerData } from '../stores/data/computers'; // Add the computers data

// // You can add more imports for other categories like watches, etc.

// const SingleProductPage = () => {
//   const { category, id } = useParams();  // Now we get both category and id from URL params
//   const { addToCart } = useCart();

//   // Dynamically load the data based on the category
//   let productData = [];
//   switch (category) {
//     case 'mobiles':
//       productData = mobileData;
//       break;
//     case 'computers':
//       productData = computerData;
//       break;
//     // Add cases for other categories like watches, etc.
//     default:
//       productData = [];
//       break;
//   }

//   // Find the specific product by id
//   const product = productData.find((item) => item.id === id);

//   // If product not found, show a 'not found' message
//   if (!product) {
//     return (
//       <>
//         <Navbar />
//         <div className="ind-section">
//           <h2>Product not found</h2>
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="ind-section">
//         <div className="ind-image">
//           <img src={product.image || '/path/to/placeholder.jpg'} alt={product.model} />
//         </div>

//         <div className="ind-details space">
//           <div className="ind-company">
//             <h2>{product.company}</h2>
//           </div>
//           <div className="ind-model space">
//             <h3>{product.model}</h3>
//           </div>
//           <div className="ind-price space">
//             <h2>{product.price}</h2>
//           </div>
//           <div className="ind-desc space">
//             <h2>{product.description}</h2>
//           </div>
//           <button onClick={() => addToCart(product)}>Add to Cart</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SingleProductPage;
