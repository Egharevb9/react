import React, {useState} from React;
import React from "react";
function Counter (){
    const [count, setCount] = useState(0); 
    const [Decrement, setDecrement] = useState(1); 
    const [Reset, setReset] = useState(0); ~


    function increment() {
        
        setCount(prevCount => prevCount + 1);
    }
    function Decrement() {
        if (count > 0 )
        setDecrement(prevCount => prevCount -1);
    }
    function Reset() {
        
        setReset();
    }
    return(
        <div>
            <button onClick={increment}>count:{count}</button>;
            <button onClick={Decrement}>count:{count}</button>;
            <button onClick={Reset}>Reset:{Reset}</button>;
        </div>

    );

}
export default Counter ;