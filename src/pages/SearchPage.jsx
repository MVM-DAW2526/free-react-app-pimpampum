import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { getSearchUrl } from '../services/bookService';
import BookCard from '../components/ui/bookCard';

export default function SearchPage( { onSelectBook } ) {
  const [query, setQuery] = useState('tolkien');

  const { data: books, carregant, error } = useFetch(
    query.trim() ? getSearchUrl(query) : null
  );

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Cerca un llibre..."
      />

      {carregant && <p>Carregant...</p>}
      {error && <p>Error: {error}</p>}

      {!carregant && !error && books && (
        <ul>
          {books.map((book) => (
            <BookCard key={book.key} book={book} onSelectBook={onSelectBook} />
          ))}
        </ul>
      )}

      {!carregant && !error && books?.length === 0 && (
        <p>No s'han trobat resultats.</p>
      )}
    </div>
  );
}