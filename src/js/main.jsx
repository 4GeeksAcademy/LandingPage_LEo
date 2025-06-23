import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar.jsx';
import Card from './components/Card.jsx';
import Jumbotron from './components/Jumbotron.jsx';
import Footer from './components/Footer.jsx';


//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
//import App from './components/Home.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
     <Jumbotron/>
    <Card/>
    <Footer/>
  
  </React.StrictMode>,
)

