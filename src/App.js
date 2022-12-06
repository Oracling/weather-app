import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Main from './components/Main';
import Right from './components/Right';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div class="container">
          <Header />
          <Main />
          <Right />
        </div>
      </div>
    </div>
  );
}

export default App;
