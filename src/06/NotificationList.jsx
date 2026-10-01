import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하소, 반갑소"
    },
    {
        id: 2,
        message: "아따매 벌써 10월이데이"
    },
    {
        id: 3,
        message: "오늘 기분은 어떠신가요?"
    },
    {
        id: 4,
        message: "만약 우울하시다면 기분 전환될 생각을 해보세요."
    },
    {
        id: 5,
        message: "내일은 더 좋은 일이 생길거요"
    }
];

let timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: []
        };
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => (
                    <Notification
                        key={notification.id}
                        id={notification.id}
                        message={notification.message}
                    />
                ))}
            </div>
        );
    }

    componentDidMount() {
        timer = setInterval(() => {
            this.setState((prevState) => {
                if (
                    prevState.notifications.length <
                    reservedNotifications.length
                ) {
                    const index = prevState.notifications.length;

                    return {
                        notifications: [
                            ...prevState.notifications,
                            reservedNotifications[index]
                        ]
                    };
                }

                clearInterval(timer);
                return null;
            });
        }, 3000);
    }

    componentWillUnmount() {
        if (timer) {
            clearInterval(timer);
        }
    }
}

export default NotificationList;