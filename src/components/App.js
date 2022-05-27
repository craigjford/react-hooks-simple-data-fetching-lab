// create your App component here
import React, { useState, useEffect } from 'react';

function App() {

    console.log('in program App')

    const [isImage, setIsImage] = useState(null);

    useEffect(() => { 
        console.log('using useEffect fetching')
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json())
        .then(data => setIsImage(data.message))
    },[])

    if (!isImage) return <p>Loading....</p> 

    return <img src={isImage} alt="A Random Dog" height="450px" width="450px" />


}

export default App;

