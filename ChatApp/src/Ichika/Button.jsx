import { useState } from "react"




const Button = () => {

    const [count, setCount] = useState(0);
    const countUp = () => {
        setCount(prev => ++prev )
    }
    return (
        <>
        <p>{count}</p>
         <button onClick={countUp}>+</button>
        </>
    )
   
}

export default Button;