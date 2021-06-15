import { useEffect } from "react";
import "./styles.css";

function Input ({ value, onChange}) {
    useEffect (() => {

    })
    
    return <input className="input" value={value} onChange={onChange} />;
}

export default Input;