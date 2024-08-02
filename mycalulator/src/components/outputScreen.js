import React from "react"; // Import React (Mandatory Step). 
import OutputScreenRow from "./outputScreenRow.js"; // Import Output Screen Row. 
  
// Functional Component. 
// Use to hold two Screen Rows. 
const OutputScreen = () => { 
    return ( 
        <div className="screen"> 
            <OutputScreenRow /> 
            <OutputScreenRow /> 
        </div> 
    ); 
}; 
export default OutputScreen; // Export Output Screen.