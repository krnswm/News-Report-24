import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewsProvider from './Context/NewsContext';
import SearchProvider from './Context/SearchContext';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Headlines from './Pages/Headlines/Headlines';

function App() {
  return <>
    <NewsProvider>
      <SearchProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/top-headlines' element={<Headlines />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </SearchProvider>
    </NewsProvider>
  </>
}

export default App;
