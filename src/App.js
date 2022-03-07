import axios from 'axios';
import React from 'react';

import CardsSection from './components/Cards/CardsSection';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <CardsSection />
      <Footer />
    </div>
  );
}

export default App;
