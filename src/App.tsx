/* eslint-disable react/no-unescaped-entities */
import React from "react";
// import HelloWorld from "components/HelloWorld";

const App: React.FC = () => {
    return (
        <>
            <h1>Hello World</h1>

            <hr />
            <input>""</input>

            <h3>Environmental variables:</h3>
            <p>
                process.env.PRODUCTION: <b>{process.env.PRODUCTION.toString()}</b>
            </p>
            <p>
                process.env.NAME: <b>{process.env.NAME}</b>
            </p>
            <p>
                process.env.VERSION: <b>{process.env.VERSION}</b>
            </p>
        </>
    );
};

export default App;
