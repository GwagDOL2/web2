import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//import reportWebVitals from "./reportWebVitals";
//import UserinfoList from "./05/exam03/UserinfoList";
//import "./05/exam03/UserinfoList.css";
//import NotificationList from "./06/NotificationList";
//import TextInputWithFocusButton from "./07/02/TextinputWithFocusButton";
//import MyButton from "./08/MyButton";
//import MyButton2 from "./08/MyButton2";
import MessageSender from "./08/MessageSender";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <MessageSender/>
    </React.StrictMode>
);

//reportWebVitals();