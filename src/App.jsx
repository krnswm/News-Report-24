import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewsProvider from './Context/NewsContext';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';

function App() {
  return <>
    <NewsProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </NewsProvider>
  </>
}

export default App;
