import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header/Header'; 
import Footer from './Components/Footer/Footer';

function App() {
  return <>
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<></>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
  </>
}

export default App;
