import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Category from './pages/Category.jsx';
import Product from './pages/Product.jsx';
import Rental from './pages/Rental.jsx';
import Projects from './pages/Projects.jsx';
import About from './pages/About.jsx';
import Articles from './pages/Articles.jsx';
import Contact from './pages/Contact.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="category" element={<Category />} />
            <Route path="product" element={<Product />} />
            <Route path="rental" element={<Rental />} />
            <Route path="projects" element={<Projects />} />
            <Route path="about" element={<About />} />
            <Route path="articles" element={<Articles />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)
