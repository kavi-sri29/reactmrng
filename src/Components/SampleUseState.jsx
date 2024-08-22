import React,{useState} from 'react'

const SampleUseState = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const [nameList, setNameList] = useState([]);
    const handleIncrement = () => {
        setCount(count +1);
    }

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleAddName = () => {
        nameList.push(name);
        console.log(nameList);
    }

  return (
    <div>
        <div>
            Counter Value : {count}
        </div>
        <div>
            <button onClick={handleIncrement}>Increment</button>
        </div>
        <div>
            <b>Enter your name</b>
        </div>
        <div>
            <input type='text' value={name} onChange={(e) => handleName(e)}/>
        </div>
        <div>
            <button onClick={handleAddName}>Add Name</button>
        </div>
        <div>
           List of Names:
           {
            nameList ? nameList.map((x) => <p>{x}</p>) : 'No names present'
           }
        </div>
    </div>
  )
}

export default SampleUseState