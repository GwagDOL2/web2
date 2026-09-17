import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import UserinfoList from "./05/exam03/UserinfoList";
import "./05/exam03/UserinfoList.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <UserinfoList />
    </React.StrictMode>
);

reportWebVitals();