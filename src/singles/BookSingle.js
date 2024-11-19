import React from 'react';
import { booksData } from '../stores/data/books';
import { useParams } from 'react-router-dom';
import Navbar from '../stores/components/Navbar';
import { useCart } from '../stores/context/CartContext';

const BookSingle = () => {
  const { id } = useParams();

  const { addToCart } = useCart();

  const product = booksData.find((item) => item.id === id);
 
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
                    {booksData.map((book) => {
                        return (
                            <div className='pro-input'>
                                <label>
                                    <input type='checkbox'
                                        // checked={selectedProduct.includes(book.author)}
                                        // onChange={() => companyHandler(book.author)}
                                    />
                                    {book.author}
                                </label>
                            </div>
                        )
                    })}
                </div>

                <div className='back'>
          <button onClick={() => window.history.go(-1)} className='backBtn'>Back</button>
        </div>

      <div className='ind-costume-section'>
        <div className='ind-costume-image'>
          <img src={product.image} alt='' />
        </div>

        <div className='ind-costume-details space'>
          <div className='ind-company'>
            <h2>{product.author}</h2>
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

export default BookSingle;




// import React from 'react';
// import Navbar from '../stores/components/Navbar';
// import { booksData } from '../stores/data/books';
// import { useParams } from 'react-router-dom';
// import { useCart } from '../stores/context/CartContext';
// import { useState } from 'react';

// const BookSingle = () => {

//     const { id } = useParams();
//     const { addToCart } = useCart();

//     const product = booksData.find(item => item.id === id);


//     const imagePath = `/${product.image}`;

//     const [selectedAuthors, setSelectedAuthors] = useState([]);


//     const companyHandler = (author) => {
//         if (selectedAuthors.includes(author)) {

//             setSelectedAuthors(selectedAuthors.filter(item => item !== author));
//         }
//         else {
//             setSelectedAuthors([...selectedAuthors, author]);
//         }
//     };

//     const uniqueAuthors = [];
//     booksData.forEach(item => {
//         if (!uniqueAuthors.includes(item.author)) {
//             uniqueAuthors.push(item.author);
//         }
//     });


//     return (
//         <>
//             <Navbar />
//             <div className='single'>
//                 <div className="pro-selected">
//                     {uniqueAuthors.map((author) => (
//                         <div key={author} className="pro-input">
//                             <label>
//                                 <input
//                                     type="checkbox"
//                                     checked={selectedAuthors.includes(author)}
//                                     onChange={() => companyHandler(author)}
//                                 />
//                                 {author}
//                             </label>
//                         </div>
//                     ))}
//                 </div>

//                 <div className='back'>
//                     <button onClick={() => window.history.go(-1)} className='backBtn'>Back</button>
//                 </div>

//                 <div className="ind-section">
//                     <div className="ind-image">

//                         <img src={imagePath} alt={product.model} />
//                     </div>

//                     <div className="ind-details space">
//                         <div className="ind-company">
//                             <h2>{product.brand}</h2>
//                         </div>
//                         <div className="ind-model space">
//                             <h3>{product.model}</h3>
//                         </div>
//                         <div className="ind-price space">
//                             <h2>{product.price}</h2>
//                         </div>
//                         <div className="ind-desc space">
//                             <h2>{product.description}</h2>
//                         </div>

//                         <button onClick={() => addToCart(product)}>Add to Cart</button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default BookSingle;



// import React from 'react';
// import { booksData } from '../stores/data/books';
// import { useParams } from 'react-router-dom';
// import Navbar from '../stores/components/Navbar';
// import { useCart } from '../stores/context/CartContext';

// const BookSingle = () => {
//   const { id } = useParams();

//   const { addToCart } = useCart();

//   const product = booksData.find((item) => item.id === id);
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
//             <h2>{product.author}</h2>
//           </div>
//           <div className='ind-model space'>
//             <h3>{product.title}</h3>
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

// export default BookSingle