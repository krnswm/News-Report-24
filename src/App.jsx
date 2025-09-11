import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewsProvider from './Context/NewsContext';
import SearchProvider from './Context/SearchContext';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Headlines from './Pages/Headlines/Headlines';
import NewsDetail from './Pages/NewsDetail/NewsDetail';
import Category from './Pages/Category/Category';

function App() {
  return <>
    <NewsProvider>
      <SearchProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/top-headlines' element={<Headlines />} />
            <Route path='/newsdetail/:id' element = {<NewsDetail />} />
            <Route path='/category/:categoryid' element={<Category />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </SearchProvider>
    </NewsProvider>
  </>
}

export default App;
