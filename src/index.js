import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));






/*
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp => resp.json())
        .then(
            (data) => {
                setIsLoaded(true)
                setImage=(data.message)
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])   
*/