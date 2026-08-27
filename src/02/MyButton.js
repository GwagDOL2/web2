function  MyButton() {
    //전역변수로 이미 존재하는 React 객체에서 useState를 꺼내서 사용한다.
    const [isClicked, setIsClicked] = React.useState(false);
//버튼 요소를 반환하는데 버튼이 클릭되었을때 isClicked 상태의 값을 변경한다.
    //버튼 요소사이의 택스트가 변경된다.(true 면 'Clicked' , false면 'Click here')
    return React.createElement(
        'button',
        {
            onClick: () => setIsClicked(!isClicked)
        },
        isClicked ? 'Clicked' : 'Clickhere'
    );
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer)
root.render(React.createElement(MyButton))