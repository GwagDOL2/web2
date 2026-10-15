import React, {useState} from "react";
import useCounter from "./useCounter";

function Accommodate(){
    const [count, increaseCount, decreaseCount] = useCounter(0);
    const [isFull, setIsFull] = useState(false);

    return(
        <div>

        </div>
    )
}

export default Accommodate;