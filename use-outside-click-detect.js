import  { useEffect } from "react";

export default function useOutsideClickDetect(ref,onClick) {
    useEffect(() => {
        if(!ref) return;
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                onClick(event);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref,onClick]);
}