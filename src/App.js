import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductPage from './Product/ProductPage';
import FaqPage from './Faq/FaqPage';
import Companyinfo from './About/Companyinfo';
import HomePage from './Home/HomePage';
import IndustryInner from './Home/IndustryInner';
import ContactPage from './Contact/ContactPage';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/industry/:Id" element={<IndustryInner />} />
          <Route path='/companyinfo' element={<Companyinfo />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/faq' element={<FaqPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;