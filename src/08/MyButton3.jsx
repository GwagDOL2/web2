import React, {useState} from "react";

function MyButton3() {
    const[count,setCount] = useState(1);
    const btnClick = (id, event) => {
        console.log(id, event.target);
    };

    return (
        <button onClick={(event) => {
            setCount((count) =>count+1);
            btnClick(1, event);
        }}>
            버튼을 클릭하세요(개발자도구(F12)실행)
        </button>
    )
}

export default MyButton3;