import { useState } from "react";
import Greeting from "../ex1/Greeting";
import LoginButton from "../ex2/LoginButton";
import LogOutButton from "../ex2/LogOutButton";

function LogInControl2() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logInClickListener = () => {
        setIsLoggedIn(true);
    };

    const logOutClickListener = () => {
        setIsLoggedIn(false);
    };

    let button;

    if (isLoggedIn) {
        button = <LogOutButton onClick={logOutClickListener} />;
    } else {
        button = <LoginButton onClick={logInClickListener} />;
    }
    button = isLoggedIn ? <LogOutButton onClick={logOutClickListener} /> : <LoginButton onClick={logInClickListener} />;
    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
        </div>
    );
}

export default LogInControl2;