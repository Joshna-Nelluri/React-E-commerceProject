

import React, { useState } from 'react';
import { computerData } from '../data/computers'; 
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const ComputersPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHandler = (company) => {
    if (selectedProduct.includes(company)) {
      setSelectedProduct(selectedProduct.filter(item => item !== company));
    } 
    else {
     
      setSelectedProduct([...selectedProduct, company]);
    }
  };


  const uniqueCompanies = [];
  computerData.forEach(item => {
    if (!uniqueCompanies.includes(item.company)) {
      uniqueCompanies.push(item.company); 
    }
  });

  const filteredProducts = selectedProduct.length === 0 ? computerData : computerData.filter(i => selectedProduct.includes(i.company));

  return (
    <>
      <Navbar />
      <div className="fullpage">
       
        <div className="pro-selected">
          {uniqueCompanies.map((company) => (
            
            <div key={company} className="pro-input">
              <label>
                <input
                  type="checkbox"
                  checked={selectedProduct.includes(company)}
                  onChange={() => companyHandler(company)}
                />
                {company}
              </label>
            </div>
          ))}
        </div>

        
        <div className="pageSection">
          {filteredProducts.map((item) => (
            <div key={item.id}>
              <Link to={`/computers/${item.id}`}>
                <div className="pageImg">
                  <img src={item.image} alt={item.model} />
                </div>
              </Link>
              <div className="proModel">
                {item.company}, {item.model}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ComputersPage;


















// import React, { useState } from 'react'
// import { computerData } from '../data/computers'
// import Navbar from '../components/Navbar'
// import { Link } from 'react-router-dom'

// const ComputersPage = () => {

//     const [selectedProduct, setSelectedProduct] = useState([])

//     const companyHandler=(it)=>{
//             if(selectedProduct.includes(it)){
//                 setSelectedProduct(selectedProduct.filter(item => item !== it))
//             }else{
//                 setSelectedProduct([...selectedProduct, it]) 
//             }
//     }


//     const filteredProduct = selectedProduct.length===0?
//         computerData : computerData.filter((i)=>selectedProduct.includes(i.company))

// return (
// <>
// <Navbar />
// <div className="fullpage">
    
// <div className="pro-selected">

// {computerData.map((phone)=>{
//     return(
//         <div className='pro-input'>
//             <label >
//                 <input type="checkbox" 
//                 checked = {selectedProduct.includes(phone.company)}
//                 onChange={()=>companyHandler(phone.company)}
//                 />
//                 {phone.company}
//             </label>
//         </div>
//     )
// })}

// </div>

// <div className='pageSection'>
//     {filteredProduct.map((item)=>{
//         return(
//             <div>

//             <Link to={`/computers/${item.id}`}>
//                 <div className="pageImg">
//                     <img src={item.image} alt="" />
//                 </div>
//             </Link>
//                 <div className="proModel">
//                     {item.company}, {item.model}
//                 </div>
//             </div>
//         )
//     })}

//  </div>
// </div>
// </>
//   )
// }

// export default ComputersPage
