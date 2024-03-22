import { useState } from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import Play from "./components/Play"

function App() {
  const [page,setPage]=useState('main');
  const handlePlayNowButton=()=>{
    setPage('play')
  };

  return <>
    {page==='main'? <MainPage playbtn={handlePlayNowButton} /> :<Play/> }
  
  </>;
}

export default App;
