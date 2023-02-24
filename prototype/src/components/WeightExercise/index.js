import { useState } from 'react';
export default function WeightEx({name}) {
    let [count, setCount] = useState(0)
    return (
        <div>
            <h1>Exercise: {name}</h1>
            <h2>{count} lbs</h2>
            <button onClick={ () => setCount(count => count+1)}>Increase Weight</button>
            <button onClick={ () => window.localStorage.setItem("weight",{count})}>Record Weight</button>
            <button onClick={ () => setCount(0)}>Reset</button>
        </div>
    )
}