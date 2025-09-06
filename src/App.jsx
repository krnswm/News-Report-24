import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header/Header'; 

function App() {
  return <>
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<></>}/>
    </Routes>
  </BrowserRouter>
  </>
}

export default App;
