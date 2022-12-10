import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import {ProdutProvider , ProdutConsumer} from './context'
ReactDOM.createRoot(document.querySelector("#root")).render(
    <ProdutProvider>
        <Router>
             <App />
        </Router>
    </ProdutProvider>
);