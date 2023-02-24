import React from "react"
import {useState} from 'react'

export default function DurationEx({ name }) {
    const [time, setTime] = React.useState(0)
    const [timeOn, setTimeOn] = React.useState(false)

    React.useEffect(() => {
        let interval = null;
        
        if(timeOn) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            }, 10)
        } else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)
        }, [timeOn])
    return (
        <div>
            <h1> Exercise: {name}</h1>
            <p>Timer: 
                {("0" + Math.floor((time / 600000) % 60)).slice(-2)}:
                {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
                {("0" + ((time / 10) % 100)).slice(-2)}
            </p>
            {!timeOn && time === 0 && (
                <button onClick={() => setTimeOn(true)}>Start</button>)}
            {timeOn && time !== 0 && (
                <button onClick={() => setTime(0)}>Reset</button>)}
        </div>
    )
}