import React from 'react';
import logo from './logo.svg';
// import { loadCSS } from "fg-loadcss/src/loadCSS";
import Dashboard from './components/Dashboard';
import ListCards from './components/ListCards';
import AddDeleteEdit from './components/AddDeleteEdit';
function App() {
  return (
    <div className="">
     {/* <Dashboard/> */}
     {/* <ListCards/> */}
     <div><AddDeleteEdit/></div>
    </div>
  );
}

export default App;
