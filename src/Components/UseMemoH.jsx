import React, { useMemo, useState } from 'react'

const UseMemoH = () => {
  const [count, setCount] = useState(10);
  const [arr, setArr] = useState([1,2,3,5]);

  function showMax(){
    console.log("Changing max");
    return Math.max(...arr);
  }

  const memVal = useMemo(() => showMax(),[])
  return (
    <>
    <div>
      <button onClick={() => setCount(count+1)}>Add Count</button>
    </div>
    <div>
      Count Value is : {count}
    </div>
    <div>
     
    </div>
    <div>
      Memo Value : {memVal}
    </div>
    
    </>
    

  )
}

export default UseMemoH