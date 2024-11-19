import React from 'react'
import Mobiles from './Mobiles';
import Computers from './computers';
import Watches from './Watch';
import MensWear from './Men';
import WomensWear from './Women';
import Furniture from './Furniture';
import AC from './Ac';
import Books from './Books';
import Fridge from './Fridge';
import Kitchen from './Kitchen';
import Speakers from './Speaker';
import Tv from './Tv';

// import UserCart from '../../stores/userCart';

const Products = () => {
  return (
    <div>
      {/* <UserCart /> */}
      <Mobiles />
      <Computers />
      <Watches />
      <MensWear />
      <WomensWear />
      <Furniture />
      <AC />
      <Books />
      <Fridge />
      <Kitchen />
      <Speakers />
      <Tv />
    </div>
  )
}

export default Products;
