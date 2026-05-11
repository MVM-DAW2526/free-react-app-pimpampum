import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { getSearchUrl } from '../services/bookService';

export default function SearchPage() {
  const [query, setQuery] = useState('tolkien');

  const { data: books, carregant, error } = useFetch(getSearchUrl(query));

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
            <li key={book.key}>{book.title}</li>
          ))}
        </ul>
      )}

      {!carregant && !error && books?.length === 0 && (
        <p>No s'han trobat resultats.</p>
      )}
    </div>
  );
}