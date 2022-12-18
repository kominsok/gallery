import React from 'react';
import './App.css';
import Gallery from './Gallery';
import axios from 'axios';

function App() {

  const getData = async()=>{
    let response= await axios.get('/cdaccount');
    return response.data;
  }

  let res = getData();

  res.then((data) => {
    console.log(data);
  });

  return (
    <>
      <h1 style={{textAlign:'center'}}>고건우 Image Gallery</h1>
      <h2 style={{textAlign:'center'}}>구독해 주세요!</h2>

      <h1>getData</h1>
      <Gallery/>
    </>
  );
}

export default App;

