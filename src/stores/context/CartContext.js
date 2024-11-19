
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
   
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(cartItem => cartItem.id === item.id);
      // console.log("itemId", item.id);
      // console.log("existing", existingItemIndex);

      if (existingItemIndex >= 0)
      {
        const updatedItems = [...prevItems];
        // console.log(updatedItems);
        updatedItems[existingItemIndex].quantity += 1;

        return updatedItems;
      } 
      else 
      {
        return [...prevItems, { ...item, quantity: 1 }];
      }
      
    });
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) => prevItems.filter((removeItem) => removeItem.id !== item.id));
  };

  const updateQuantity = (item, quantity) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((i) =>
        i.id === item.id ? { ...i, quantity }  : i 
      );
      // console.log("quantity", quantity);
      return updatedItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};






//   const addToCart = (item) => {
//     setCartItems([...cartItems, item]);
//   };

//   const removeFromCart = (item) => {
//     setCartItems(cartItems.filter((removeItem) => removeItem !== item));
//   };


// import React, { useState, useRef, useEffect } from 'react';

// const Cart = () => {
//     const [isCartOpen, setIsCartOpen] = useState(true);  // Cart is initially open
//     const cartRef = useRef(null);  // Ref for the cart container

//     useEffect(() => {
//         const handleClickOutside = (e) => {
//             // Check if the click was outside the cart
//             if (cartRef.current && !cartRef.current.contains(e.target)) {
//                 setIsCartOpen(false);  // Close the cart if clicked outside
//             }
//         };

//         // Attach the click event listener when the component is mounted
//         window.addEventListener('mousedown', handleClickOutside);

//         // Clean up the event listener when the component is unmounted
//         return () => {
//             window.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);  // Empty dependency array ensures this runs only once on mount and unmount

//     return (
//         <div>
//             <button onClick={() => setIsCartOpen(!isCartOpen)}>
//                 Toggle Cart
//             </button>

//             {isCartOpen && (
//                 <div ref={cartRef} className="cart">
//                     <h3>Your Cart</h3>
//                     <p>Cart items...</p>
//                     {/* Other cart content */}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Cart;



