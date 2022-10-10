import './App.css';
import React, { Component } from 'react';
import News from './components/News';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<News key="general" country="in" pageSize={18} category="general" />} />
            <Route exact path="/business" element={<News key="business" country="in" pageSize={18} category="business" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" country="in" pageSize={18} category="entertainment" />} />
            <Route exact path="/health" element={<News key="health" country="in" pageSize={18} category="health" />} />
            <Route exact path="/science" element={<News key="science" country="in" pageSize={18} category="science" />} />
            <Route exact path="/sports" element={<News key="sports" country="in" pageSize={18} category="sports" />} />
            <Route exact path="/Technology" element={<News key="Technology" country="in" pageSize={18} category="Technology" />} />
          </Routes>
        </Router>
      </div >
    )
  }
}