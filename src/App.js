import React from 'react';
import './scss/app.scss';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div class="container">
          <div class="header">
            <div class="header__top">
              <a href="/" className="logo">
                <h1>Dead Oracle</h1>
              </a>
              <div className="header__description">This is my personal blog..</div>
            </div>
            <div class="header__menu">
              <ul className="header__menu-list">
                <li className="header__menu-item">
                  <a href="/" className="header__menu-link">
                    Main
                  </a>
                </li>
                <li className="header__menu-item">
                  <a href="/" className="header__menu-link">
                    Blog
                  </a>
                </li>
                <li className="header__menu-item">
                  <a href="/" className="header__menu-link">
                    About Us
                  </a>
                </li>
                <li className="header__menu-item">
                  <a href="/" className="header__menu-link">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="main">
            <div class="main__top">
              <h2>Lorem ipsum dolor sit amet.</h2>
            </div>
            <div class="main__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem qui ad nobis sequi
              eveniet. Vitae repudiandae dicta aliquid excepturi quasi?
            </div>
          </div>
          <div class="right">
            <div class="right__title">
              <h3>Лента новостей</h3>
            </div>
            <div class="right__content">
              <div className="right__item">Итем (Доделать структуру)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
