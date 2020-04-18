import React from 'react';
import logo from './logo.svg';
import Header from "./components/Header"
import Team from "./components/Team"
import data from "./data/employees.json"
import './App.css';

function App() {
  return (
    <div className="App">
   <Header/>
   <h2>
    Our team of  <span>{data.length}</span> stretegist, designer, devolepers
    make customs products for startup and leading Brand. 
    </h2>

    <Team data={data}/>
    </div>
  );
}
  
export default App;
