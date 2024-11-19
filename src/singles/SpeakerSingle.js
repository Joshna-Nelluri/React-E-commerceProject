
import React from 'react';
import Navbar from '../stores/components/Navbar';
import { speakerData } from '../stores/data/speaker';
import { useParams } from 'react-router-dom';
import { useCart } from '../stores/context/CartContext';

const SpeakerSingle = () => {
  
    const { id } = useParams(); 
    const {addToCart} = useCart();

    const product = speakerData.find(item => item.id === id);
    
    // const imagePath = `/${product.image}`;

    // const [selectedProduct, setSelectedProduct] = useState([]);

    // const companyHandler = (it) => {
    //     if (selectedProduct.includes(it)) {
    //         setSelectedProduct(selectedProduct.filter(item => item !== it))
    //     }
    //     else {
    //         setSelectedProduct([...selectedProduct, it])
    //     }
    // }
    return (
        <>
            <Navbar />
            <div className='single'>
            <div className='pro-selected'>
                    {speakerData.map((speaker) => {
                        return (
                            <div className='pro-input'>
                                <label>
                                    <input type='checkbox'
                                        // checked = {selectedProduct.includes(speaker.brand)}
                                        // onChange = {() => companyHandler(speaker.brand)}
                                    />
                                    {speaker.brand}
                                </label>
                            </div>
                        )
                    })}
            </div>

            <div className='back'>
                <button onClick={() => window.history.go(-1)} className='backBtn'>Back</button>
            </div>
                
         
            <div className="ind-section">
                <div className="ind-image">
           
                    <img src={product.image} alt={product.model} />
                </div>

                <div className="ind-details space">
                    <div className="ind-company">
                        <h2>{product.brand}</h2> 
                    </div>
                    <div className="ind-model space">
                        <h3>{product.model}</h3> 
                    </div>
                    <div className="ind-price space">
                        <h2>{product.price}</h2> 
                    </div>
                    <div className="ind-desc space">
                        <h2>{product.description}</h2> 
                    </div>

                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
                </div>
            </div>
        </>
    );
};

export default SpeakerSingle;




// const SpeakerSingle = () => {
//   const { id } = useParams();
  
//   const {addToCart} = useCart();

//   const product = speakerData.find((item) => item.id === id);
//   console.log(id);
//   return (
//     <>
//       <Navbar />
//       <div className='ind-section'>
//         <div className='ind-image'>
//           <img src={product.image} alt='' />
//         </div>

//         <div className='ind-details space'>
//           <div className='ind-company'>
//             <h2>{product.brand}</h2>
//           </div>
//           <div className='ind-model space'>
//             <h3>{product.model}</h3>
//           </div>
//           <div className='ind-price space'>
//             <h2>{product.price}</h2>
//           </div>
//           <div className='ind-desc space'>
//             <h2>{product.description}</h2>
//           </div>
//           <button onClick={() => addToCart(product)}>Add to Cart</button>
//         </div>

//       </div>
//     </>
//   )
// }

// export default SpeakerSingle;