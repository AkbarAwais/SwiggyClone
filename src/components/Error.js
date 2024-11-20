import { useRouteError } from "react-router-dom";
import React from "react";

const Error = () => {
    const err = useRouteError();
    console.log(err);

    return (
        <div>
            <h1>Oops!</h1>
            <h2>Something Went Wrong</h2>
        </div>
    )
}

export default Error;
