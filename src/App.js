import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React,{useState} from 'react';

function App() {
  const [mode, setmode] = useState('light');// tells whether dark mode is enabled or not 
  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
    }
    else{
      setmode('light');
    }
  }
  return (
    // <></> This is known as JSX fragment Note : JSX function returns only one tag.
    
    <>
      <Navbar title = "TextUtils"  aboutText = "About TextUtils" mode = {mode} toggleMode = {toggleMode}/>
      <div className="container my-3">
      <TextForm heading ='Enter the text to analyze below' />
      <About/>
      </div>
    </>
  );
}

export default App;
