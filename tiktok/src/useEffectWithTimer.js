import { useEffect, useState } from "react";
import Content from "./Content";

function Content() {
    
    const [countdown, setCountdown] = useState(180)

    useEffect(() => {
        const timerId = setInterval(() => {
            setCountdown(preSate => preSate - 1)
        }, 1000)

        // Cleanup func
        return () => clearInterval(timerId)
    }, [])

    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}
export default Content