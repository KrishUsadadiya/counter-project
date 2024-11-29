import "./counter.css"
import { useEffect, useState } from "react";

function Count() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("hello");
    }, [count])
    return (
        <div className="card-counter">
            <div className="counter-content">
                <h1 className="heading">Counter</h1>
                <h2 className="main-count">{count}</h2>
                <button className="button-1" onClick={() => setCount(count + 1)}>Increament</button>
                <button className="button-2" disabled={count == 0} onClick={() => setCount(count - 1)}>Decreament</button>
                <button className="button-3" disabled={count == 0} onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    )
}
export default Count;