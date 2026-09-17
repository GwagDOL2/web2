import React from "react";
import Userinfo from "./Userinfo";
import "./UserinfoList.css";

const users = [
    {
        name: "Jang Wonyoung",
        avatarUrl: "https://i.pinimg.com/736x/02/ea/52/02ea524494f6b4911f7271a3093f6fda.jpg",
        comment: "Positive midset, Lucky vidbe~"
    },
    {
        name: "Ahn Yujin",
        avatarUrl: "https://i.pinimg.com/736x/f9/d6/08/f9d60842b8d68e615b311c2e2f9ff192.jpg",
        comment: "I think likes me. ^^"
    },
    {
        name: "Jang Wonyoung",
        avatarUrl: "https://i.pinimg.com/1200x/34/78/fe/3478fe3e545b8d8f24ade5564447a992.jpg",
        comment: "Positive midset, Lucky vidbe~"
    },
];

function UserinfoList() {
    const currentDate = new Date();

    return (
        <div>
            {users.map((user, index) => {
                return (
                    <div className="comment" key={index}>
                        <Userinfo user={user} />

                        <div className="comment-text">
                            {user.comment}
                        </div>

                        <div className="comment-date">
                            {currentDate.toDateString()}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default UserinfoList;