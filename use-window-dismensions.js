import { useState, useEffect } from "react";



const getDimensions  = () => {
    const { innerWidth : width, innerHeight : height } = window;

    return { width, height }
}

const useWindowDimensions = () => {
    const [windowDimensions,setWindowDimensions] = useState(getDimensions());


    useEffect( () => {

        function handleResize(){
            setWindowDimensions(getDimensions());
        }

        window.addEventListener("resize", handleResize)
        return ( () => { window.removeEventListener("resize", handleResize) } )
    } ,[])

    return windowDimensions
}

export default useWindowDimensions;