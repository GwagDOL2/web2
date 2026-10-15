import React, { useState } from "react";

function MessageSender() {
    const [message, setMessage] = useState("");

    function handleChange(e) {
        setMessage(e.target.value);
    }

    function handleSend() {
        if (message.trim() === "") {
            alert("메시지를 입력해주세요!");
            return;
        }
        alert(`전송된 메시지: ${message}`);
        setMessage(""); // 전송 후 입력창 초기화
    }

    return (
        <div style={{ padding: "20px" }}>
            <h2>메시지 전송기</h2>
            <input
                type="text"
                value={message}
                onChange={handleChange}
                placeholder="메시지를 입력하세요..."
                style={{ padding: "8px", marginRight: "8px", width: "200px" }}
            />
            <button onClick={handleSend} style={{ padding: "8px 16px" }}>
                전송
            </button>
        </div>
    );
}

export default MessageSender;