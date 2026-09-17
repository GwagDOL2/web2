import React from "react";
import "./Avatar.css";

function Avatar(props) {
    return(
        <img className ={"avatar"}
            src={props.user.avatrarUrl}
        />
    );
}

export default Avatar;