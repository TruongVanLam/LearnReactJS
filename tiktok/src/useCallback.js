import {memo} from "react";

function Content({onIncrease}) {
    console.log('re-render');
    return (
        <>
            <h1>Hello anh em</h1>
            <button onClick={onIncrease}>Click me</button>
        </>
        

    )
}

export default memo(Content)