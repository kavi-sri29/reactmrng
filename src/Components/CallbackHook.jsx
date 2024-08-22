import React, { useCallback, useState } from 'react'

const CallbackHook = () => {
    const [count, setCount] = useState(0);
    const increment = useCallback(() => {
        setCount(count + 1);
        console.log("Increment rendered");
    }, [count]);
  return (
    <div>
        <div>
            Count : {count}
        </div>
        <div>
            <button onClick={increment}>Increment</button>
        </div>
    </div>
  )
}

export default CallbackHook