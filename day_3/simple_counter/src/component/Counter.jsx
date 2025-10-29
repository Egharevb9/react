import counter from "./component/counter";
import { useState } from "react";
function counter () {
    const [count, setcount] = useState(0);
    function Increment(){
        count = count + 1;
        let count = 0;
    }
    function Decrement(){
        count = count - 1;
        let count = 0;
       
    }
   
    return(
        <div>
            <p>count : {count}</p>
            <button onClick={Increment}>Increment</button>
            <p>decrement:</p>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={reset} className="reset_btn">Reset</button>
        </div>
        

    );
}

export default counter