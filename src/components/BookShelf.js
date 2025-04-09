import React, { useState } from 'react';
import './BookShelf.css';

const BookShelf = () => {
  // State to track which book is currently selected
  const [selectedBook, setSelectedBook] = useState(null);
  
  // Sample book data
  const books = [
    {
      id: 1,
      spine: "The 38 Letters from J.D. Rockel...",
      color: "#3D1E1A",
      textColor: "white"
    },
    {
      id: 2,
      spine: "The Tao of Charlie Munger",
      color: "#E04E32",
      textColor: "white"
    },
    {
      id: 3,
      spine: "Insanely Simple",
      color: "#F2F2F2",
      textColor: "#333"
    },
    {
      id: 4,
      spine: "Goddesses in Everywoman",
      color: "#202020",
      textColor: "white"
    },
    {
      id: 5,
      spine: "Finite and Infinite Games",
      color: "#F2F2F2",
      textColor: "#333"
    },
    {
      id: 6,
      spine: "King, Warrior, Magician, Lover",
      color: "#264D63",
      textColor: "white"
    },
    {
      id: 7,
      spine: "Civilization and its Discontents",
      color: "#588A68",
      textColor: "white"
    }
  ];

  // Handle book click
  const handleBookClick = (bookId) => {
    if (selectedBook === bookId) {
      setSelectedBook(null);
    } else {
      setSelectedBook(bookId);
    }
  };

  return (
    <div className="book-display-container">
      <h2 className="book-display-title">Interactive Book Display</h2>
      <p className="book-display-instruction">Click on any book spine to see its cover. Click again to return to the shelf view.</p>
      
      <div className="book-shelf">
        <div className="books-row">
          {books.map((book) => {
            // Is this the selected book?
            const isSelected = selectedBook === book.id;
            
            return (
              <div
                key={book.id}
                className="book-spine-container"
                style={{
                  width: isSelected ? '0px' : '60px',
                }}
              >
                {/* Book spine - only shown when not selected */}
                {!isSelected && (
                  <div
                    className="book-spine"
                    style={{
                      backgroundColor: book.color,
                    }}
                    onClick={() => handleBookClick(book.id)}
                  >
                    <div 
                      className="spine-text"
                      style={{ color: book.textColor }}
                    >
                      {book.spine}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Selected book cover */}
        {selectedBook !== null && (
          <div 
            className="book-cover"
            onClick={() => handleBookClick(selectedBook)}
          >
            <div className="cover-content">
              <div className="book-title">
                {books.find(b => b.id === selectedBook).spine.split(' ').slice(0, 3).join(' ')}
              </div>
              <div className="cover-image">
                Cover Art
              </div>
              <div className="author-name">
                Author Name
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookShelf;