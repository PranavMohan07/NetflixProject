import React from 'react';
import NavBar from './components/NavBar/NavBar';
import "./App.css"
import Banner from './components/Banner/Banner';
import Post from './components/Post/Post';


function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <Post/>
    </div>
  );
}

export default App;
