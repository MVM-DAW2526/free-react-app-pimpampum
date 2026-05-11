import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import BookCard from '../components/ui/BookCard';

const Home = () => {
  
  const [query, setQuery] = useState('react');
  

  const { data: books, carregant, error } = useFetch(`https://openlibrary.org/search.json?q=${query}`);

  
  const handleSearch = (e) => {
   
    if (e.target.value.trim() !== '') {
      setQuery(e.target.value);
    }
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Explora nuestra Biblioteca</h1>
        <p>Busca entre miles de libros usando la API de Open Library</p>
        
        
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Busca por título, autor..." 
            onChange={handleSearch}
            className="search-input"
          />
        </div>
      </header>

      
      {carregant && (
        <div className="loading">
          <p>Cargando libros... 📖</p>
        </div>
      )}

      {error && (
        <div className="error-message">
          <p>⚠️ {error}</p>
        </div>
      )}

      
      <main className="book-grid">
        {!carregant && books && books.length > 0 ? (
          books.slice(0, 12).map((book) => (
            <BookCard 
              key={book.key} 
              book={{
                title: book.title,
                author: book.author_name ? book.author_name[0] : 'Autor desconocido',
                cover: book.cover_i 
                  ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` 
                  : 'https://via.placeholder.com/150x200?text=No+Cover',
                year: book.first_publish_year || 'N/A'
              }} 
            />
          ))
        ) : (
          !carregant && <p>No se han encontrado libros para "{query}"</p>
        )}
      </main>
    </div>
  );
};

export default Home;