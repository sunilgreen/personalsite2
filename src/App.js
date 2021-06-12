import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import MyWork from './components/MyWork'
import Contact from './components/Contact'




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home id="homesection"></Home>
      <About id="aboutsection"></About>
      <MyWork id="myworksection"></MyWork>
      <Contact id="contactsection"></Contact>


      
      
    </div>
  );
}

export default App;

