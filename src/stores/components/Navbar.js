import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

import UserCart from '../userCart';

import { acData } from '../data/ac';
import { mobileData } from '../data/mobiles';
import { computerData } from '../data/computers';
import { booksData } from '../data/books';
import { fridgeData } from '../data/fridge';
import { furnitureData } from '../data/furniture';
import { kitchenData } from '../data/kitchen';
import { menData } from '../data/men';
import { watchData } from '../data/watch';
import { womanData } from '../data/woman';
import { tvData } from '../data/tv';
import { speakerData } from '../data/speaker';

const Navbar = () => {
  
    const [isModalOpen, setModalOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false); 
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const cartRef = useRef(null);
    const navigate = useNavigate();


    const { cartItems } = useCart(); 
    const allProducts = useMemo(() => [
        ...acData.map(product => ({ ...product, categoryName: 'ac' })),
        ...mobileData.map(product => ({ ...product, categoryName: 'mobiles' })),
        ...tvData.map(product => ({ ...product, categoryName: 'tv' })),
        ...computerData.map(product => ({ ...product, categoryName: 'computers' })),
        ...booksData.map(product => ({ ...product, categoryName: 'books' })),
        ...fridgeData.map(product => ({ ...product, categoryName: 'fridges' })),
        ...furnitureData.map(product => ({ ...product, categoryName: 'furniture' })),
        ...kitchenData.map(product => ({ ...product, categoryName: 'kitchen' })),
        ...menData.map(product => ({ ...product, categoryName: 'mensWear' })),
        ...watchData.map(product => ({ ...product, categoryName: 'watches' })),
        ...womanData.map(product => ({ ...product, categoryName: 'womansWear' })),
        ...speakerData.map(product => ({ ...product, categoryName: 'speakers' }))
    ], []);

  
    useEffect(() => {
        if (searchQuery === '') {
            setSuggestions([]);
            return;
        }

        const matchQuery = (str) => str.toLowerCase().includes(searchQuery.toLowerCase());
        const filteredSuggestions = allProducts.filter(product =>
            matchQuery(product.model || '') || matchQuery(product.title || '')
        );
        setSuggestions(filteredSuggestions);
    }, [searchQuery, allProducts]);

   
    useEffect(() => {
        const handleMouseClick = (e) => {
            
            if (cartRef.current && !cartRef.current.contains(e.target)) {
                setIsCartOpen(false); 
                console.log("cartref", cartRef);
                console.log("current cartRef", !cartRef.current.contains(e.target));
            }
        };

        window.addEventListener('mousedown', handleMouseClick);
      
        return () => {
            window.removeEventListener('mousedown', handleMouseClick);
        };
    }, []);


    const handleSearch = (e) => {
        e.preventDefault();
        const queryLower = searchQuery.toLowerCase();
        const matchedProduct = allProducts.find(product =>
            product.model.toLowerCase() === queryLower ||
            (product.title && product.title.toLowerCase() === queryLower)
        );

        if (matchedProduct) {
            const categoryName = matchedProduct.categoryName;
            navigate(`/${categoryName}/${matchedProduct.id}`);
        } else {
            alert('No matching product found!');
        }
    };


    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };


    const handleSuggestion = (suggestion) => {
        navigate(`/${suggestion.categoryName}/${suggestion.id}`);
        setSearchQuery('');
        setSuggestions([]);
    };


    const toggleCartModal = () => {
        setModalOpen(!isModalOpen);
    };

    return (
        <>
            <div className="navSection">
            
                <div className="title">
                    <Link to="/" className="nav-link">
                        <h2>E-Mart</h2>
                    </Link>
                </div>


                <div className="search">
                    <form onSubmit={handleSearch}>
                        <input
                            className="searchBar"
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleChange}
                        />
                        <button type="submit" className="searchBtn">Search</button>
                    </form>

                    {suggestions.length > 0 && (
                        <div className="suggestions">
                            <ul>
                                {suggestions.map((suggestion, index) => (
                                    <li key={index} onClick={() => handleSuggestion(suggestion)}>
                                        <i className="fa fa-search"></i>
                                        {suggestion.model || suggestion.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <div className="user">
                    <div className="cartPage" onClick={() => setIsCartOpen(true)}>
                        Cart <span>{cartItems.length}</span>
                    </div>
                </div>
            </div>
     
            {/* {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="closeBtn" onClick={toggleCartModal}>X</button> 
                        <UserCart />
                    </div>
                </div>
            )} */}

      
            {isCartOpen && !isModalOpen && (
                <div ref={cartRef} className="cart">
                    <button onClick={() => setIsCartOpen(false)} className='toggleBtn'>
                        {/* Toggle Cart */}
                    </button>
                    <UserCart />
                </div>
            )}


            <div className="subMenu">
                <ul>
                    <Link to='/mobiles' className='nav-link'><li>Mobiles</li></Link>
                    <Link to='/computers' className='nav-link'><li>Computers</li></Link>
                    <Link to='/watches' className='nav-link'><li>Watches</li></Link>
                    <Link to='/mensWear' className='nav-link'><li>Men's Wear</li></Link>
                    <Link to='/womansWear' className='nav-link'><li>Women's Wear</li></Link>
                    <Link to='/furniture' className='nav-link'><li>Furniture</li></Link>
                    <Link to='/kitchen' className='nav-link'><li>Kitchen</li></Link>
                    <Link to='/books' className='nav-link'><li>Books</li></Link>
                    <Link to='/fridges' className='nav-link'><li>Fridges</li></Link>
                    <Link to='/speakers' className='nav-link'><li>Speakers</li></Link>
                    <Link to='/ac' className='nav-link'><li>AC</li></Link>
                    <Link to='/tv' className='nav-link'><li>TV's</li></Link>
                </ul>
            </div>
        </>
    );
};

export default Navbar;









    // const handleSuggestion = (suggestion) => {
    //     const matchedProduct = allProducts.find(product =>
    //         product.model === suggestion
    //     );
    //     if (matchedProduct) {
    //         const categoryName = matchedProduct.categoryName; 
    //         // navigate(`/product/${matchedProduct.id}`);
    //         navigate(`/${categoryName}/${matchedProduct.id}`);
    //     }
    //     setSearchQuery('');
    //     setSuggestions([]);
    // };


    // const handleKey = (e) => {
    //     if (e.key === "ArrowUp" && selectedItem > 0) {
    //         setSelectedItem(prev => prev - 1);
    //     } else if (e.key === "ArrowDown" && selectedItem < suggestions.length - 1) {
    //         setSelectedItem(prev => prev + 1);
    //     } else if (e.key === "Enter" && selectedItem >= 0) {
    //         handleSuggestion(suggestions[selectedItem]);
    //     } else {
    //         setSelectedItem(-1);
    //     }
    // };








//     const validProducts = useMemo(() => [
//         'mobiles', 'computers', 'watches', 'menswear', 'womanswear',
//         'furniture', 'kitchen', 'books', 'fridges', 'speakers', 'ac', 'tv'
//     ], []);

//     useEffect(() => {
//         if (searchQuery === '') {
//             setSuggestions([]);
//             return;
//         }

//         const filteredSuggestions = validProducts.filter(category =>
//             category.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//         setSuggestions(filteredSuggestions);
//     }, [searchQuery, validProducts]);

//     // console.log(searchQuery);




//             <div className='navSection'>
//                 <div className='title'>
//                     <Link to='/' className='nav-link'>
//                         <h2>E-Mart</h2>
//                     </Link>
//                 </div>

//                 <div className='user'>
//                     {/* <Link to='/cart'> */}
//                         <div className='cart' onClick={toggleCartModal}>
//                             Cart <span>{cartItems.length}</span>
//                         </div>
//                     {/* </Link> */}
//                 </div>
//             </div>


//             {/* <UserCart isOpen={isModalOpen} onClose={toggleCartModal} /> */}
//         </>
//     );
// };

// export default Navbar;



// onClick={toggleCartModal} style={{ cursor: 'pointer' }}







// if (searchQuery.trim() === '') {
//     return; // Optionally, you can handle empty search here
// }


