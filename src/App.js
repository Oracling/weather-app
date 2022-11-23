import React from 'react';
import './scss/app.scss';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div class="container">
          <div class="header">
            <div class="header__top"></div>
            <div class="header__menu"></div>
          </div>
          <div class="main">
            <div class="main__top"></div>
            <div class="main__content"></div>
          </div>
          <div class="right">
            <div class="right__title"></div>
            <div class="right__content"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
