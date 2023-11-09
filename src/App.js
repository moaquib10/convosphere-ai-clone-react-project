import React from 'react'
import "./App.css"
import {Features,Footer,Header,Possibility,WhatCS} from "./containers";
import {CTA,Navbar} from "./components";
import Brands from './components/brands/Brands';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Brands/>
      <WhatCS/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Footer/>
    </div>
  );
}

export default App;
