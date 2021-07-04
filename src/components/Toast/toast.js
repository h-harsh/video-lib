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

// export const Toast = ({text}) => {
//     const [status, setStatus] = useState(false)

//   return (
//     <div>
//       <button onClick={() => setStatus(true)} >Click me</button>
//       {status ? ( <div onClick={() => setStatus(false)}> <InToast value={true} text={text} /> </div> ) : null}  
//     </div>
//   );
// }
