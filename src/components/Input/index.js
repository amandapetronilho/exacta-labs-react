import "./styles.css";

function Input ({ value, onChange}) {
    return <input className="input" value={value} onChange={onChange} />;
}

export default Input;