// 1) Imort React and ReactDOM librarires
import React from "react";
import ReactDOM  from "react-dom/client";
import App from "./App";

// 2) Get a refrence to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a Component
// function App(){
//     return (
//         <input placeholder="hi there" />
//     );
// //    const message = 'Enter age';
// //      return <input 
// //                  type = "number"
// //                    min = {5} 
// //                    max = {10} 
// //                    list = {[1,2,3]}
// //                    style = {{color: 'red'}}
// //                    alt = {message}
// //             />  
     
// }
// 5) Show the component on the screen
root.render(<App />);
