import React, { useEffect, useRef } from 'react';
import { createPortal } from "react-dom";

const modelRoot = document.getElementById("model");

const Model = ({ children }) => {
    const elRef = useRef(null)
    if (!eleRef.current) {
        eleRef.current = document.createElement("div");
    }

    useEffect(() => {
        modelRoot.appendChild(elRef.current);//appended it
        return () => modelRoot.removeChild(elRef.current); //removed it
    }, [input]);

    return createPortal(<div>{children}</div>, elRef.current)
}

export default Model;