import React from 'react';
import './App.css';
import Gallery from './Gallery';
import axios from 'axios';

function App() {

  axios.get('http://localhost:8080/cdaccount').then(function(response){
    console.log(response);
  });

  return (
    <>  
      <h1 style={{textAlign:'center'}}>고건우 Image Gallery</h1>
      <h2 style={{textAlign:'center'}}>구독해 주세요!</h2>
      <Gallery/>
    </>
  );
}

export default App;
