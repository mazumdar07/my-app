import React from 'react';
import './App.css';
import Header from "./Header";
import TinderCards from './TinderCards';
import SwipeButton from './SwipeButton';

function App() {
  return (
    <div className="App">
     {/* <h1>hello world</h1> */}
     <Header />
     <TinderCards />
     <SwipeButton />
     

    </div>
  );
}

export default App;
