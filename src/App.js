import React from 'react';
import './scss/app.scss';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <div className="header">
            <div className="header__top">
              <a href="/" className="logo">
                <h1>Weather App v. 1.0</h1>
              </a>
            </div>
          </div>
          <div className="main__wrap">
            <div className="main__wrap-left">123</div>
            <div className="main__wrap-right">
              <div className="weater__info">
                <h2>Lalala</h2>
              </div>
              <ul className="weekly__weather">
                <li className="forecast__day">Monday</li>
                <li className="forecast__day">Tuesday</li>
                <li className="forecast__day">Wednesday</li>
                <li className="forecast__day">Thirsday</li>
                <li className="forecast__day">Friday</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
