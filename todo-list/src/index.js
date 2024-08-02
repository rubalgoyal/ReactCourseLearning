import React from "react";
import ReactDoM from "react-dom/client"
import App from './App';

const ele = document.getElementById('root');
const root = ReactDoM.createRoot(ele);

root.render(<App />);