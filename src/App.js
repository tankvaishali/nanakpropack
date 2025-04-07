import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Home/HomePage';
import ProductPage from './Product/ProductPage';
import FaqPage from './Faq/FaqPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/productpage' element={<ProductPage />} />
          <Route path='/faqpage' element={<FaqPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;