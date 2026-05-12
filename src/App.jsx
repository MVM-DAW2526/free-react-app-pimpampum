import { useState } from 'react';
import './App.css'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage'

function App() {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div>
      <NavBar />
      {selectedBook 
      ? <DetailPage book={selectedBook} goBack={() => setSelectedBook(null)} />
      : <SearchPage onSelectBook={setSelectedBook} />
      }
      <Footer />
    </div>
  );
}

export default App;