function WarningBanner(props) {
    if (!props.warning) {
        return null;   // null을 반환하면 화면에 아무것도 안 그림
    }

    return <div className="warning">경고!</div>;
}

export default WarningBanner;