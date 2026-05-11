import React from 'react'

function BookCard({ book }) {
  return (
    <li className="book-card">

      {book.cover_i && (
        <img
          className="book-image"
          src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
          alt={book.title}
        />
      )}

      <h3 className="book-title">
        {book.title}
      </h3>

      <p className="book-author">
        {book.author_name?.[0]}
      </p>

    </li>
  )
}

export default BookCard