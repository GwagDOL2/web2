import React from "react";
import Book from "./Book";

//dd 한빛 미디어 가서 imgUrl에 넣어주기
function Library(props) {
    return(
        <div className="library-container">
            <Book name="사용자 입장에서 생각하세요" numOfPage={300} imgUrl = "https://www.hanbit.co.kr/_next/image?url=https%3A%2F%2Fcdn-prod.hanbit.co.kr%2Fbooks%2Fd00dc1dd-8130-4305-b057-8ce5a10c80a4.png&w=512&q=100"/>
            <Book name="사토시의 서" numOfPage={200} imgUrl = "https://www.hanbit.co.kr/_next/image?url=https%3A%2F%2Fcdn-prod.hanbit.co.kr%2Fbooks%2F1c726fc7-13a6-4768-bb11-4396894a8aa5.png&w=512&q=100"/>
            <Book name="그록봇" numOfPage={500} imgUrl = "https://www.hanbit.co.kr/_next/image?url=https%3A%2F%2Fcdn-prod.hanbit.co.kr%2Fbooks%2F0d5bc993-3eb4-4c78-a5d4-11b4a80c9af4.png&w=512&q=100"/>
            <Book name="끌림의 설계" numOfPage={250} imgUrl = "https://www.hanbit.co.kr/_next/image?url=https%3A%2F%2Fcdn-prod.hanbit.co.kr%2Fbooks%2F49534f61-6f34-42da-bec8-9215e2d24cb2.png&w=512&q=100"/>
            <Book name="나는 돈이 된다" numOfPage={500} imgUrl = "https://www.hanbit.co.kr/_next/image?url=https%3A%2F%2Fcdn-prod.hanbit.co.kr%2Fbooks%2F9f40d522-142d-4623-b356-b58138f50eba.png&w=512&q=100"/>
        </div>

    );
    
}

export default Library;