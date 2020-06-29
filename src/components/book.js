import React from "react";

const Book = ({ book }) => {
  return (
    <div className='book'>
      <h4>
        {book.title}, by {book.author}: {"⭑".repeat(book.stars)}
      </h4>
      <h5>Read on {book.date}</h5>
    </div>
  );
};

export default Book;
