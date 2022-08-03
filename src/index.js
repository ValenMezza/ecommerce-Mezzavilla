import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './componets/App';
import App from './App'

import "../src/scss/partials/_header.scss"
import "../src/scss/partials/_body.scss"
const root = ReactDOM.createRoot(document.getElementById('root'));


// root.render(<Header/>)
// root.render(<Footer/>)
root.render(<App/>)