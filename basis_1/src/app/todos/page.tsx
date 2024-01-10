import { useState } from "react";
//using Usestate to change variable state
// State is component's memory 
// this component should remember something (**)

export default function Todos() {
// Named function: Todos # Anonymous function let parameter to not change the variable )
    const [inputText, setInputText] = useState("");
    // this coponent will remember inputText
    // inputText: state variable which value I store 
    // setInputText: setter function updating value of property in an object/ managing state and trigger React to render the component again. 
    // array destructing [A, B]: unpack array into variables ( A then B in oderly)
    // Most used data structure in Javascript are Object, Array (gather data items into an ordered list)
    // array return by useState always has exactly two items. 
    return (
        // div : generic containter
         <div className ="">
        < div className="text-2xl"> Todo List Next </div>
            <div className="">
                <input 
                type="text" 
                placeholder="Enter Todo list" 
                value={inputText}
                onChange={(e)  => setInputText(e.target.value)} 
                />
            </div>
        </div>
    );
}