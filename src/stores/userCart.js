
import React from 'react';
import { useCart } from './context/CartContext';

const UserCart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <div className='cartItems'>
        <h2 className='cart-text'>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className='cart-emptyText'>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className='item'>
                <img src={item.image}
                alt={item.model} className='item-img' />
                <p><strong>{item.title}</strong></p>
                <p><strong>{item.author}</strong></p>
                <p><strong>{item.company}</strong></p>
                <p><strong>{item.brand}</strong></p>
                <p>{item.model}</p>
                <p><strong>Price per item:</strong> ${item.price}</p>

                <p><strong>Total Price:</strong> $ {(item.price * item.quantity).toFixed(2)}</p>
                <p><strong>Quantity:</strong> {item.quantity}</p>


                <div className='cart-update'>
                  <button className='incBtn'
                    onClick={() => updateQuantity(item, item.quantity + 1)}
                    disabled={item.quantity >= 10}
                  >
                    +
                  </button>
                  <span>{item.quantity}</span>
                  <button className='decBtn'
                    onClick={() => updateQuantity(item, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>

                  <button className='removeBtn' onClick={() => removeFromCart(item)}>Remove</button>
                </div>

              </div>
            ))}

            <h3>Total Amount: ${totalPrice.toFixed(2)}</h3>
          </>
        )}
      </div>
    </>
  );
};

export default UserCart;










//     <div>
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         cartItems.map((item) => (
//           <div key={item.id}>
//             <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
//             <p><strong>{item.company}</strong></p>

//             <p>Quantity: {item.quantity}</p>
//             <button onClick={() => updateQuantity(item, item.quantity + 1)}>+</button>
//             {item.quantity}
//             <button onClick={() => updateQuantity(item, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
//             <button onClick={() => removeFromCart(item)}>Remove</button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default CartPage;











