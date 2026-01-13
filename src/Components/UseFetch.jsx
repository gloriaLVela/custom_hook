import {useState, useEffect } from "react";

const UseFetch = (url) => {
    const[data,setData]=useState();
    // This is a React Hook used for performing side effects in functional components. It’s typically used for fetching data, subscribing to events, or any other side effects that don’t involve rendering.
     useEffect(()=>{
        //This initiates an HTTP request to the specified url.
        fetch(url)
        //This converts the response from the server to JSON format.
        .then((res)=>res.json())
        //This sets the retrieved data to the state variable data. setData is a function that updates the state in React functional components.
        .then((data)=>setData(data))
    },[])
return [data]
}

export default UseFetch
