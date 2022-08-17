import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './componets/App';
import App from './App'

import "../src/scss/partials/_header.scss"
import "../src/scss/partials/_body.scss"
import "../src/scss/partials/_main.scss";
import "../src/scss/partials/_aside.scss";
import "../src/scss/partials/_footer.scss";
import "../src/scss/partials/_details.scss";
import "../src/scss/variables/-variables.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));


// root.render(<Header/>)
// root.render(<Footer/>)
root.render(<App/>)