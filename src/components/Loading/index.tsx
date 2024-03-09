import "./index.css";

function renderElements() {
    const elements = [];
    for (let i = 0; i < 10; i++) {
        elements.push(<div key={i} className="banter-loader__box"></div>);
    }
    return elements;
}

const LoadingComponent = () => {
    return (
        <div className="h-screen">
            <div className="banter-loader">{renderElements()}</div>
        </div>
    );
};

export default LoadingComponent;
