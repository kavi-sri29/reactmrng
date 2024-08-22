import React, { useRef } from 'react'

const UseRefHook = () => {
    let pref = useRef();  //Will return an object with one property 'current'. 
    let iref = useRef('Enter your name');
    const handleClick = () => {
        pref.current.style.color = 'blue';
        console.log(pref.current);
    }

    const handleChange = () => {
       console.log(iref.current.value);
    }

  return (
    <>
    <div>UseRefHook</div>
    <p ref={pref}>This is the paragraph used for explaining useReference hook</p>
    <button onClick={handleClick}>Click me</button>
    <br />
    <input type='text' onChange={handleChange} ref={iref}/>
     
    </>
    
  )
}

export default UseRefHook