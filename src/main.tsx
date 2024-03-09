/* eslint-disable react-refresh/only-export-components */
import "./index.css";

import React, { Suspense, useEffect, useState } from "react";

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { StyleSheetManager } from "styled-components";
import LoadingComponent from "./components/Loading";

// Lazy loading App component
const LazyApp = React.lazy(() => import("./App"));

function Root() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <BrowserRouter>
            <StyleSheetManager shouldForwardProp={(prop) => prop !== "shake"}>
                <Suspense fallback={<LoadingComponent />}>
                    {isLoading ? <LoadingComponent /> : <LazyApp />}
                </Suspense>
            </StyleSheetManager>
        </BrowserRouter>
    );
}

ReactDOM.render(<Root />, document.getElementById("root"));
