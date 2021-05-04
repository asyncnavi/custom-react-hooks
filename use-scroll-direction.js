import {useEffect, useState} from "react";

const useScrollDirection = () => {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [currentScrollTop, setCurrentScrollTop] = useState(0);
    const [ticking,setTicking] = useState(false);
    const [direction, setDirection] = useState("up");

    useEffect(() => {
        window.addEventListener("scroll", function () {
            setCurrentScrollTop(window.scrollY);
            if (!ticking) {
                window.requestAnimationFrame(function () {
                    setTicking(false);
                });
                setTicking(true);
            }
        });
    }, [ticking]);

    useEffect(() => {
        if (lastScrollTop === currentScrollTop) return;
        if (lastScrollTop > currentScrollTop) {
            setDirection("up");
        } else {
            setDirection("down");
        }
        setLastScrollTop(currentScrollTop);
    }, [lastScrollTop, currentScrollTop]);

    return {
        direction
    }
}


useScrollDirection.isDown = (direction) => {
    return direction === "down";
}

useScrollDirection.isUp = (direction) => {
    return direction === "up";
}

export default useScrollDirection;