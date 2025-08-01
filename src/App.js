import React, { Fragment } from "react";
import './App.css';
import Home from './Compoents/Home';
import Add from './Compoents/Add';
import View from './Compoents/View';
import Edit from './Compoents/Edit';
import HomeContext from './Compoents/HomeContext';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Fragment>
      {/* <Home /> */}
      <Router>
        <Routes>
          <Route path="/" element={<HomeContext />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/create" element={<Add />}/>
          <Route path="/view/:id" element={<View />}/>
          <Route path="/edit/:id" element={<Edit />}/>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
