import React from 'react';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Botton from './Components/Botton';

function App (){
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
      <Botton/>
    </div>
  );
}

export default App;
