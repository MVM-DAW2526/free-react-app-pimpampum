import './App.css'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div>
      <NavBar />
        <SearchPage />
      <Footer />
    </div>
  );
}

export default App;