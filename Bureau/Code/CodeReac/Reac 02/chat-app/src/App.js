import React from 'react';
import './App.css';
import Contact from './components/Contact.js';

function App() {
  return (
    <div className="App">
      <Contact avatar="https://generation-nintendo.com/images/encyclopedie/zfd1liem.jpg" name="Ayo" online={true}/>
      <Contact avatar="https://generation-nintendo.com/images/encyclopedie/sfluv8gz.jpg" name="Oly" online={false}/>
      <Contact avatar="https://risibank.fr/cache/stickers/d469/46987-full.jpg" name="David" online={false}/>
    </div>
  );
}

export default App;
