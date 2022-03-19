import "./toast.css";
import { useState } from "react";

 export const InToast = ({value, text}) => {
  const [display, setDisplay] = useState(value);

  return display ? (
    <div className="container">
      <p>{text}</p>
      <button onClick={() => setDisplay(false)}>X</button>
    </div>
  ) : null;
};

