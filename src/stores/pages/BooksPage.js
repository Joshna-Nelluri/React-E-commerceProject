import React, { useState } from 'react';
import { booksData } from '../data/books'; 
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const BooksPage = () => {
  const [selectedAuthors, setSelectedAuthors] = useState([]);

  
  const companyHandler = (author) => {
    if (selectedAuthors.includes(author)) {
  
      setSelectedAuthors(selectedAuthors.filter(item => item !== author));
    } 
    else {
      setSelectedAuthors([...selectedAuthors, author]);
    }
  };

 
  const uniqueAuthors = [];
  booksData.forEach(item => {
    if (!uniqueAuthors.includes(item.author)) {
      uniqueAuthors.push(item.author); 
    }
  });

  
  const filteredBooks = selectedAuthors.length === 0
    ? booksData 
    : booksData.filter((book) => selectedAuthors.includes(book.author));

  return (
    <>
      <Navbar />
      <div className='fullPage'>

        <div className="pro-selected">
          {uniqueAuthors.map((author) => (
            <div key={author} className="pro-input">
              <label>
                <input
                  type="checkbox"
                  checked={selectedAuthors.includes(author)}
                  onChange={() => companyHandler(author)}
                />
                {author}
              </label>
            </div>
          ))}
        </div>


        <div className='pageSection'>
          {filteredBooks.map((book) => (
            <div key={book.id}>
              <Link to={`/books/${book.id}`}>
                <div className='pageImg'>
                  <img src={book.image} alt={book.title} />
                </div>
              </Link>
              <div className='proModel bookModel'>
                {book.author}, {book.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BooksPage;
