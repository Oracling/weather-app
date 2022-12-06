import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Main from './components/Main';
import Right from './components/Right';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div class="main_content">
          <Header />

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Right />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
