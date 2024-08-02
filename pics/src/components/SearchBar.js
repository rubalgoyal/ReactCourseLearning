import './SearchBar.css';
import { useState } from "react"; // 1

function SearchBar({onSubmit}) {
    const [term, setTerm] = useState(''); //step-1.
    const handleFormSubmit = (event) => {
        event.preventDefault(); //prevent auto reloading
       
        onSubmit(term);
       
    };

    /* What handleChange is doing:
        Every single time a user changes the input in any way, our arrow function is goting to run.
        We are going t update our state with whatever value is inside the input.
        Every single time we call setTerm function it causes our component to re-render. 
        So in total, our component is now rerendring with every single key press.
    */

    const handleChange = (event) => { //step-2 after putting event it implements step-3
        setTerm(event.target.value) // step-4
    }
    
    return (
        <div className='search-bar'>
            <form onSubmit={handleFormSubmit}>
                <label>Enter Search Term</label>
                <input 
                    value={term} // step -5 //value always forces to input to display whatever the currernt term piece state of value is
                    onChange={handleChange} //step-2
                
                />
            </form>
        </div>    
    );
    
}

export default SearchBar;   

/* Handling Text inputs
    1. Create a new piece to state.
    2. Create an event handler to watch for the 'onChange' event.
    3. When the 'onChange' event fires, get the value form the input.
    4. Take that value from input and use it to update yur state.
    5. Pass your state to the input as the value prop.
*/