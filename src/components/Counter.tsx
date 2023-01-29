import {useState} from "react";
import s from "./counter.module.sass"

const Counter = () => {
    const [count, setCount] = useState(0)

    const onInc = () => setCount(count => count += 1)
    const onDec = () => setCount(count => count -= 1)

    return (
        <div>
            {count}
            <button className={s.counter__button} onClick={onInc}>INC</button>
            <button className={s.counter__button} onClick={onDec}>DEC</button>
        </div>
    )
}

export default Counter
