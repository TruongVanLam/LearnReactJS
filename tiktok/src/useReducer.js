import { useState, useReducer, useRef } from "react";

// useState
// 1. init sate: 0
// 2. Action: Up(state + 1) / Down(state -1)


// useReducer
// 1. Init sate: 0
// 2. Action: Up(state + 1) / Down(state -1)
// 3. Reducer
// 4. Dispatch


// Init sate
const initSate = {
    job: '',
    jobs: []
}
// Action
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}

const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}

const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}

// Reducer
const reducer = (state, action) => {
    console.log('Action: ', action);
    console.log('Prev state: ', state);

    let newState
    switch (action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload
            }
            break;
        case ADD_JOB:
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
            break;
        case DELETE_JOB:
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload, 1)
            newState = {
                ...state,
                jobs: newJobs
            }
            break;
        default:
            throw new Error('Invalid action')
    }

    console.log('New state: ', newState);
    return newState
}
function Content() {

    const [state, dispatch] = useReducer(reducer, initSate)
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