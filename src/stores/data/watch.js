export const watchData = [{
        "id": "25",
        "product": "Watch",
        "image": "/assets/Watch/1.png",
        "brand": "Apple",
        "model": "Watch Series 7",
        "price": "399.00",
        "category": "Wearable",
        "description": "The latest Apple Watch with a larger display and advanced health features."
    },
    {
        "id": "26",
        "product": "Watch",
        "image": "/assets/Watch/2.jpg",
        "brand": "Samsung",
        "model": "Galaxy Watch 4",
        "price": "299.99",
        "category": "Wearable",
        "description": "A Samsung smartwatch with comprehensive health tracking and versatile design."
    },
    {
        "id": "27",
        "product": "Watch",
        "image": "/assets/Watch/3.jpg",
        "brand": "Fitbit",
        "model": "Versa 3",
        "price": "229.00",
        "category": "Wearable",
        "description": "A Fitbit smartwatch with built-in GPS and fitness tracking capabilities."
    },
    {
        "id": "28",
        "product": "Watch",
        "image": "/assets/Watch/4.jpg",
        "brand": "Garmin",
        "model": "Forerunner 945",
        "price": "599.50",
        "category": "Wearable",
        "description": "A high-end Garmin GPS watch designed for serious athletes and outdoor enthusiasts."
    },
    {
        "id": "29",
        "product": "Watch",
        "image": "/assets/Watch/5.jpg",
        "brand": "Fossil",
        "model": "Gen 5",
        "price": "249.00",
        "category": "Wearable",
        "description": "A stylish Fossil smartwatch with Wear OS and customizable watch faces."
    },
    {
        "id": "30",
        "product": "Watch",
        "image": "/assets/Watch/6.jpg",
        "brand": "Casio",
        "model": "G-Shock GA-2100",
        "price": "129.99",
        "category": "Wearable",
        "description": "A rugged and iconic G-Shock watch with a modern and slim design."
    },
    {
        "id": "31",
        "product": "Watch",
        "image": "/assets/Watch/7.jpg",
        "brand": "TAG Heuer",
        "model": "Carrera Calibre Heuer 02",
        "price": "5999.00",
        "category": "Luxury",
        "description": "A luxurious TAG Heuer mechanical watch with a sporty and sophisticated design."
    },
    {
        "id": "32",
        "product": "Watch",
        "image": "/assets/Watch/8.jpg",
        "brand": "Timex",
        "model": "Weekender Chronograph",
        "price": "89.00",
        "category": "Wearable",
        "description": "A versatile Timex watch with a chronograph function and interchangeable straps."
    },
    {
        "id": "33",
        "product": "Watch",
        "image": "/assets/Watch/9.jpg",
        "brand": "Citizen",
        "model": "Eco-Drive Promaster",
        "price": "299.99",
        "category": "Wearable",
        "description": "A Citizen watch powered by light with durable construction for outdoor adventures."
    },
    {
        "id": "34",
        "product": "Watch",
        "image": "/assets/Watch/10.jpg",
        "brand": "Seiko",
        "model": "SKX007",
        "price": "199.50",
        "category": "Wearable",
        "description": "A classic Seiko diver's watch known for its reliability and timeless design."
    },
    {
        "id": "35",
        "product": "Watch",
        "image": "/assets/Watch/11.jpg",
        "brand": "Michael Kors",
        "model": "Access Lexington 2",
        "price": "279.00",
        "category": "Wearable",
        "description": "A Michael Kors smartwatch with a luxurious look and smart functionalities."
    },
    {
        "id": "36",
        "product": "Watch",
        "image": "/assets/Watch/12.jpg",
        "brand": "Huawei",
        "model": "Watch GT 3",
        "price": "199.00",
        "category": "Wearable",
        "description": "A Huawei smartwatch with long battery life and health monitoring features."
    }
]


// import React, { useState, useMemo, useEffect, useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useCart } from '../context/CartContext';

// import UserCart from '../userCart';

// import { acData } from '../data/ac';
// import { mobileData } from '../data/mobiles';
// import { computerData } from '../data/computers';
// import { booksData } from '../data/books';
// import { fridgeData } from '../data/fridge';
// import { furnitureData } from '../data/furniture';
// import { kitchenData } from '../data/kitchen';
// import { menData } from '../data/men';
// import { watchData } from '../data/watch';
// import { womanData } from '../data/woman';
// import { tvData } from '../data/tv';
// import { speakerData } from '../data/speaker';

// const Navbar = () => {
//     const [isModalOpen, setModalOpen] = useState(false);
//     const [isCartOpen, setIsCartOpen] = useState(true);
//     const cartRef = useRef(null);
//     const { cartItems } = useCart();
//     const [searchQuery, setSearchQuery] = useState('');
//     const [suggestions, setSuggestions] = useState([]);
//     // const [selectedItem, setSelectedItem] = useState(-1);
//     const navigate = useNavigate();


//     const allProducts = useMemo(() => [
//         ...acData.map(product => ({ ...product, categoryName: 'ac' })),
//         ...mobileData.map(product => ({ ...product, categoryName: 'mobiles' })),
//         ...tvData.map(product => ({ ...product, categoryName: 'tv' })),
//         ...computerData.map(product => ({ ...product, categoryName: 'computers' })),
//         ...booksData.map(product => ({ ...product, categoryName: 'books' })),
//         ...fridgeData.map(product => ({ ...product, categoryName: 'fridges' })),
//         ...furnitureData.map(product => ({ ...product, categoryName: 'furniture' })),
//         ...kitchenData.map(product => ({ ...product, categoryName: 'kitchen' })),
//         ...menData.map(product => ({ ...product, categoryName: 'mensWear' })),
//         ...watchData.map(product => ({ ...product, categoryName: 'watches' })),
//         ...womanData.map(product => ({ ...product, categoryName: 'womansWear' })),
//         ...speakerData.map(product => ({ ...product, categoryName: 'speakers' }))

//     ], []);


//     useEffect(() => {
//         const handleMouseClick = (e) => {
//             if (cartRef.current && !cartRef.current.contains(e.target)) {
//                 setIsCartOpen(false);
//             }
//         }


//         window.addEventListener('mousedown', handleMouseClick);

//         return () => {
//             window.removeEventListener('mousedown', handleMouseClick)
//         }
//     }, [])


//     useEffect(() => {
//         if (searchQuery === '') {
//             setSuggestions([]);
//             return;
//         }


//         const matchQuery = (str) => {
//             // console.log(str)
//             return str.toLowerCase().includes(searchQuery.toLowerCase());
//         };

//         // const queryLower = searchQuery.toLowerCase();

//         // const filteredSuggestions = allProducts.filter(product =>
//         //     product.model.toLowerCase().includes(queryLower)
//         // ).map(product => product.model);

//         const filteredSuggestions = allProducts.filter(product => {

//             // return matchQuery(product.brand || '') || matchQuery(product.company || '') || matchQuery(product.title || '');
//             return matchQuery(product.model || '') || matchQuery(product.title || '');
//         });

//         setSuggestions(filteredSuggestions);
//     }, [searchQuery, allProducts]);

//     const handleSearch = (e) => {
//         e.preventDefault();
//         const queryLower = searchQuery.toLowerCase();

//         // const matchedProduct = allProducts.find(product =>
//         //     product.model.toLowerCase() === queryLower
//         // );

//         const matchedProduct = allProducts.find(product =>
//             product.model.toLowerCase() === queryLower ||
//             // (product.brand && product.brand.toLowerCase() === queryLower) ||
//             // (product.company && product.company.toLowerCase() === queryLower) ||
//             (product.title && product.title.toLowerCase() === queryLower)

//         );



//         if (matchedProduct) {
//             const categoryName = matchedProduct.categoryName;
//             // navigate(`/product/${matchedProduct.id}`);
//             navigate(`/${categoryName}/${matchedProduct.id}`);
//             // navigate(`/${queryLower}`);
//         } else {
//             alert('No matching product found!');
//         }
//     };

//     const handleChange = (e) => {
//         setSearchQuery(e.target.value);
//     };


//     const handleSuggestion = (suggestion) => {
//         navigate(`/${suggestion.categoryName}/${suggestion.id}`);
//         setSearchQuery('');
//         setSuggestions([]);
//     };


//     const toggleCartModal = () => {
//         setModalOpen(!isModalOpen);
//     };


//     return (
//         <>
//             <div className="navSection">
//                 <div className="title">
//                     <Link to="/" className="nav-link">
//                         <h2>E-Mart</h2>
//                     </Link>
//                 </div>
//                 <div className="search">
//                     <form onSubmit={handleSearch}>
//                         <input
//                             className="searchBar"
//                             type="text"
//                             placeholder="Search..."
//                             value={searchQuery}
//                             onChange={handleChange}
//                         // onKeyDown={handleKey}
//                         />
//                         <button type="submit" className="searchBtn">Search</button>
//                     </form>

//                     {suggestions.length > 0 && (
//                         <div className="suggestions">
//                             <ul>
//                                 {suggestions.map((suggestion, index) => (
//                                     <li
//                                         key={index}
//                                         onClick={() => handleSuggestion(suggestion)}
//                                     // onMouseEnter={() => setSelectedItem(index)}
//                                     // style={{ backgroundColor: selectedItem === index ? '#f0f0f0' : 'transparent' }}
//                                     >
//                                         <i className="fa fa-search"></i>
//                                         {/* {suggestion} */}
//                                         {/* {suggestion.brand || suggestion.company || suggestion.title} */}
//                                         {suggestion.model || suggestion.title}

//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     )}
//                 </div>
//                 <div className='user'>
//                     {/* <Link to='/cart'> */}
//                     <div className='cart' onClick={toggleCartModal}>
//                         Cart <span>{cartItems.length}</span>
//                     </div>
//                     {/* </Link> */}
//                 </div>
//             </div>


//             {isModalOpen && (
//                 <div className="modal">
//                     <div className="modal-content">
//                         <button className="closeBtn" onClick={toggleCartModal}>X</button>
                        
//                         <UserCart />
//                     </div>
//                 </div>
//             )}

                   


//             { isCartOpen && !isModalOpen && (
//                 <div ref={cartRef} className="cart">
//                     <button onClick={() => setIsCartOpen(!isCartOpen)}>
//                             Toggle Cart
//                         </button>
//                     <UserCart /> 
//                 </div>
//             )}

//             <div className="subMenu">
//                 <ul>
//                     <Link to='/mobiles' className='nav-link'><li>Mobiles</li></Link>
//                     <Link to='/computers' className='nav-link'><li>Computers</li></Link>
//                     <Link to='/watches' className='nav-link'><li>Watches</li></Link>
//                     <Link to='/mensWear' className='nav-link'><li>Men's Wear</li></Link>
//                     <Link to='/womansWear' className='nav-link'><li>Women's Wear</li></Link>
//                     <Link to='/furniture' className='nav-link'><li>Furniture</li></Link>
//                     <Link to='/kitchen' className='nav-link'><li>Kitchen</li></Link>
//                     <Link to='/books' className='nav-link'><li>Books</li></Link>
//                     <Link to='/fridges' className='nav-link'><li>Fridges</li></Link>
//                     <Link to='/speakers' className='nav-link'><li>Speakers</li></Link>
//                     <Link to='/ac' className='nav-link'><li>AC</li></Link>
//                     <Link to='/tv' className='nav-link'><li>TV's</li></Link>
//                 </ul>
//             </div>


             
//         </>
//     );
// };

// export default Navbar;


