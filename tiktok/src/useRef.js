import { useState, useRef, useEffect } from "react";

function Content() {
    const [count, setCount] = useState(60)

    const timerId = useRef()
    const preCount = useRef()

    useEffect(() => {
        preCount.current = count
    }, [count])

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(pre => pre - 1)
        }, 1000)

        console.log('Start->', timerId.current);
    }

    const handleStop = () => {
        clearInterval(timerId.current)
        console.log('Stop->', timerId.current);
    }

    return (
        <div style={{ padding: 20 }}>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )

}

export default Content