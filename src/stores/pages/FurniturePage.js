
// import React, { useState } from 'react';
// import { furnitureData } from '../data/furniture';
// import Navbar from '../components/Navbar';
// import { Link } from 'react-router-dom';

// const FurniturePage = () => {

//     const [selectedProduct, setSelectedProduct] = useState([]);

//     const companyHandler = (it) => {
//         if (selectedProduct.includes(it)) {
//             setSelectedProduct(selectedProduct.filter(item => item !== it))
//         }
//         else {
//             setSelectedProduct([...selectedProduct, it])
//         }
//     }

//     const filteredProduct = selectedProduct.length === 0 ? furnitureData : furnitureData.filter((i) => selectedProduct.includes(i.brand))
//     return (
//         <>
//             <Navbar />
//             <div className='fullPage'>
//                 <div className='pro-selected'>
//                     {furnitureData.map((furniture) => {
//                         return (
//                             <div className='pro-input' key={furniture.id}>
//                                 <label>
//                                     <input type='checkbox'
//                                         checked = {selectedProduct.includes(furniture.brand)}
//                                         onChange = {() => companyHandler(furniture.brand)}
//                                     />
//                                     {furniture.brand}
//                                 </label>
//                             </div>
//                         )
//                     })}
//                 </div>
//                 <div className='pageSection'>
//                     {filteredProduct.map((item) => {
//                         return (
//                             <div>
//                                 <Link to={`/furniture/${item.id}`}>
//                                     <div className='pageImg'>
//                                         <img src={item.image} alt='' />
//                                     </div>
//                                 </Link>

//                                 <div className='proModel'>
//                                     {item.brand}, {item.model}
//                                 </div>
//                             </div>
//                         )
//                     })}
//                 </div>
//             </div>
//         </>
//     )
// }

// export default FurniturePage;




import React, { useState } from 'react';
import { furnitureData } from '../data/furniture'; 
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const FurniturePage = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);


  const companyHandler = (brand) => {
    if (selectedBrands.includes(brand)) {
    
      setSelectedBrands(selectedBrands.filter(item => item !== brand));
    } 
    else {

      setSelectedBrands([...selectedBrands, brand]);
    }
  };


  const uniqueBrands = [];
  furnitureData.forEach(item => {
    if (!uniqueBrands.includes(item.brand)) {
      uniqueBrands.push(item.brand); 
    }
  });


  const filteredProducts = selectedBrands.length === 0
    ? furnitureData 
    : furnitureData.filter((product) => selectedBrands.includes(product.brand));

  return (
    <>
      <Navbar />
      <div className="fullPage">
       
        <div className="pro-selected">
          {uniqueBrands.map((brand) => (
            <div key={brand} className="pro-input">
              <label>
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => companyHandler(brand)} 
                />
                {brand}
              </label>
            </div>
          ))}
        </div>

        
        <div className="pageSection">
          {filteredProducts.map((item) => (
            <div key={item.id}>
              <Link to={`/furniture/${item.id}`}>
                <div className="pageImg">
                  <img src={item.image} alt={item.model} />
                </div>
              </Link>

              <div className="proModel">
                {item.brand}, {item.model}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FurniturePage;
