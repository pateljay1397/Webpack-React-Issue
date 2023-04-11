import React from "react";
import ReactDOM from "react-dom";
import {ErrorBoundary} from "react-error-boundary";

import App from "./App";

const ErrorFallback = ({error}) => {
    return (
        <div>
            <h2>Something went wrong:</h2>
            <p>{error.toString()}</p>
        </div>
    );
};

ReactDOM.render(
    <ErrorBoundary FallbackComponent={ErrorFallback}>
        <App />
    </ErrorBoundary>,
    document.getElementById("root")
);
