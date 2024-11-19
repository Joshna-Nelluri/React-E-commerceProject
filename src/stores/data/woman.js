export const womanData = [{
        "id": "49",
        "product": "Woman Wear",
        "image": "/assets/Woman/1.jpg",
        "type": "Dress",
        "brand": "Zara",
        "model": "Flowy Maxi",
        "price": "79.99",
        "category": "Clothing",
        "description": "A flowy maxi dress with floral patterns, perfect for summer occasions."
    },
    {
        "id": "50",
        "product": "Woman Wear",
        "image": "/assets/Woman/2.jpg",
        "type": "Blouse",
        "brand": "H&M",
        "model": "Classic Silk",
        "price": "49.90",
        "category": "Clothing",
        "description": "A classic silk blouse suitable for professional and casual settings."
    },
    {
        "id": "51",
        "product": "Woman Wear",
        "image": "/assets/Woman/3.jpg",
        "type": "Jeans",
        "brand": "Levi's",
        "model": "501 Skinny",
        "price": "89.50",
        "category": "Clothing",
        "description": "Skinny fit jeans with a classic 5-pocket design, perfect for everyday wear."
    },
    {
        "id": "52",
        "product": "Woman Wear",
        "image": "/assets/Woman/4.jpg",
        "type": "Jumpsuit",
        "brand": "Forever 21",
        "model": "Utility Jumpsuit",
        "price": "59.99",
        "category": "Clothing",
        "description": "A utility-style jumpsuit with a modern and versatile look."
    },
    {
        "id": "53",
        "product": "Woman Wear",
        "image": "/assets/Woman/5.jpg",
        "type": "Skirt",
        "brand": "Topshop",
        "model": "A-Line Mini",
        "price": "39.99",
        "category": "Clothing",
        "description": "A stylish A-line mini skirt with a retro touch, suitable for various occasions."
    },
    {
        "id": "54",
        "product": "Woman Wear",
        "image": "/assets/Woman/6.jpg",
        "type": "Sweater",
        "brand": "Gap",
        "model": "Cable Knit",
        "price": "49.95",
        "category": "Clothing",
        "description": "A cozy cable knit sweater with a timeless design, perfect for chilly days."
    },
    {
        "id": "55",
        "product": "Woman Wear",
        "image": "/assets/Woman/7.jpg",
        "type": "Blazer",
        "brand": "Mango",
        "model": "Tailored Blazer",
        "price": "79.99",
        "category": "Clothing",
        "description": "A tailored blazer with a chic silhouette, suitable for formal and casual looks."
    },
    {
        "id": "56",
        "product": "Woman Wear",
        "image": "/assets/Woman/8.jpg",
        "type": "Activewear",
        "brand": "Lululemon",
        "model": "Align Leggings",
        "price": "98.00",
        "category": "Clothing",
        "description": "High-quality leggings with a buttery soft feel, ideal for yoga and workouts."
    },
    {
        "id": "57",
        "product": "Woman Wear",
        "image": "/assets/Woman/8.jpg",
        "type": "Swimwear",
        "brand": "Secret",
        "model": "Bikini Set",
        "price": "59.50",
        "category": "Clothing",
        "description": "A stylish bikini set with vibrant patterns, perfect for beach days."
    },
    {
        "id": "58",
        "product": "Woman Wear",
        "image": "/assets/Woman/10.jpg",
        "type": "Pants",
        "brand": "Hollister",
        "model": "High-Rise Skinny",
        "price": "49.95",
        "category": "Clothing",
        "description": "High-rise skinny pants with a flattering fit, suitable for various occasions."
    },
    {
        "id": "59",
        "product": "Woman Wear",
        "image": "/assets/Woman/11.jpg",
        "type": "Coat",
        "brand": "Voltaire",
        "model": "Wool Blend Coat",
        "price": "299.00",
        "category": "Clothing",
        "description": "A stylish wool blend coat with a modern and elegant design, perfect for colder days."
    },
    {
        "id": "60",
        "product": "Woman Wear",
        "image": "/assets/Woman/12.jpg",
        "type": "T-Shirt",
        "brand": "Eagle",
        "model": "Graphic Tee",
        "price": "24.95",
        "category": "Clothing",
        "description": "A casual graphic tee with trendy prints, suitable for relaxed everyday outfits."
    }
]




// import React, { useState, useMemo, useEffect } from 'react';
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
//     const { cartItems } = useCart();
//     const [searchQuery, setSearchQuery] = useState('');
//     const [suggestions, setSuggestions] = useState([]);
//     const [selectedItem, setSelectedItem] = useState(-1);
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
//         if (searchQuery === '') {
//             setSuggestions([]);
//             return;
//         }


//         const matchQuery = (str) => {
//             return str.toLowerCase().includes(searchQuery.toLowerCase());
//         };

//         // const queryLower = searchQuery.toLowerCase();

//         // const filteredSuggestions = allProducts.filter(product =>
//         //     product.model.toLowerCase().includes(queryLower)
//         // ).map(product => product.model);

//         const filteredSuggestions = allProducts.filter(product => {

//             return matchQuery(product.brand || '') || matchQuery(product.company || '') || matchQuery(product.title || '');
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
//             (product.brand && product.brand.toLowerCase() === queryLower) ||
//             (product.company && product.company.toLowerCase() === queryLower) ||
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

//     // const handleSuggestion = (suggestion) => {
//     //     const matchedProduct = allProducts.find(product =>
//     //         product.model === suggestion
//     //     );
//     //     if (matchedProduct) {
//     //         const categoryName = matchedProduct.categoryName; 
//     //         // navigate(`/product/${matchedProduct.id}`);
//     //         navigate(`/${categoryName}/${matchedProduct.id}`);
//     //     }
//     //     setSearchQuery('');
//     //     setSuggestions([]);
//     // };

//     const handleSuggestion = (suggestion) => {
//         navigate(`/${suggestion.categoryName}/${suggestion.id}`);
//         setSearchQuery('');
//         setSuggestions([]);
//     };

//     const handleKey = (e) => {
//         if (e.key === "ArrowUp" && selectedItem > 0) {
//             setSelectedItem(prev => prev - 1);
//         } else if (e.key === "ArrowDown" && selectedItem < suggestions.length - 1) {
//             setSelectedItem(prev => prev + 1);
//         } else if (e.key === "Enter" && selectedItem >= 0) {
//             handleSuggestion(suggestions[selectedItem]);
//         } else {
//             setSelectedItem(-1);
//         }
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
//                             onKeyDown={handleKey}
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
//                                         onMouseEnter={() => setSelectedItem(index)}
//                                         style={{ backgroundColor: selectedItem === index ? '#f0f0f0' : 'transparent' }}
//                                     >
//                                         <i className="fa fa-search"></i>
//                                         {/* {suggestion} */}
//                                         {suggestion.brand || suggestion.company || suggestion.title}

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
//              <div className="modal">
//                     <div className="modal-content">
//                         <button className="closeBtn" onClick={toggleCartModal}>X</button>
//                          <UserCart />
//                     </div>
//                  </div>
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