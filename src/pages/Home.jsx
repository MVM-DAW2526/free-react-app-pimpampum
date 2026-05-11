import BookCard from '../components/ui/BookCard';

const Home = () => {
  // Datos de prueba (luego vendrán de un fetch)
  const mockBooks = [
    { id: 1, title: "El Quijote", author: "Cervantes", year: 1605, cover: "https://via.placeholder.com/150x200" },
    { id: 2, title: "1984", author: "George Orwell", year: 1949, cover: "https://via.placeholder.com/150x200" },
    { id: 3, title: "Harry Potter", author: "J.K. Rowling", year: 1997, cover: "https://via.placeholder.com/150x200" },
  ];

  return (
    <section className="home-page">
      <h1>Nuestro Catálogo</h1>
      <div className="book-grid" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {mockBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Home;