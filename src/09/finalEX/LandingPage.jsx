import React, { useState } from "react";
import Toolbar from "./Toolbar";

function LandingPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginClick = () => {
        setIsLoggedIn(true);
    };

    const logoutClick = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            <Toolbar
                isLoggedIn={isLoggedIn}
                loginClick={loginClick}
                logoutClick={logoutClick}
            />
            <div style={{ padding: 16 }}>소플과 함께하는 리액트 공부!</div>
        </div>
    );
}

export default LandingPage;