import { useReducer, useRef } from "react";
import reducer, { initSate } from "./reducer";
import {setJob, addJob, deleteJob} from './actions'
import logger from "./logger";

// useState
// 1. init sate: 0
// 2. Action: Up(state + 1) / Down(state -1)


// useReducer
// 1. Init sate: 0
// 2. Action: Up(state + 1) / Down(state -1)
// 3. Reducer
// 4. Dispatch



function Content() {

    const [state, dispatch] = useReducer(logger(reducer), initSate)
    const { job, jobs } = state
    const inputRef = useRef()

    const handleSunmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))
        inputRef.current.focus()
    }

    return (
        <div>
            <h3>Todo</h3>
            <input
                ref={inputRef}
                value={job}
                placeholder="Enter todo..."
                onChange={e => {
                    dispatch(setJob(e.target.value))
                }}
            />
            <button
                onClick={handleSunmit}
            >
                Add
            </button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <span onClick={() => dispatch(deleteJob(index))}>
                            &times;
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Content