import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import CardComp from './CardComp';

const Hooks = () => {
    let [count, setCount] = useState(0);
    let [name, setName] = useState('John');
    let [names, setNames] = useState([]);
    let [inputName, setInputName] = useState('');
    let [content, setContent] = useState('');
    let [products, setProducts] = useState([]);
    const handleCount = () => {
        setCount(count +2);
    }
    const handleCount1 = () => {
        setCount(count - 1);
    }
    const addName = (e) => {
        names.push(inputName);
        setNames([...names]);
    }
    const getAllPducts = async() => {
        try{
            let response = await fetch("https://fakestoreapi.com/products");
            let data = await response.json()
            setProducts(data);
        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(() =>{
        setContent('Callback function in useEffect');
        getAllPducts();
    },[])
  return (
    <div>
        <b>The count value is updated on each stage</b>
        <div>
            <button onClick={handleCount}>Increment</button>
            <button onClick={handleCount1}>Decrement</button>
        </div>
        <div>
           Count Value after state update - {count}
        </div>
        <div>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
            Updated Name : {name}
        </div>
        <div>
            <b>Enter Name:</b><br />
            <input type='text' value={inputName} onChange={(e) => setInputName(e.target.value)}/><br/>
            <button onClick={() => addName()}>+</button>
            
        </div>
        <div>
            <b>List of Names:</b>
           
            <ul>
    
        { names ? names.map((x) => <li>{x}</li>) : '' }
    
            </ul>
        </div>
        {content}
        <div>
        
            {
                products && products.map((product) => (
                    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Price</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{product.id}</td>
          <td>{product.title}</td>
          <td>{product.price}</td>
          <td>{product.category}</td>
        </tr>
      </tbody>
    </Table>
                ))
            }
        </div>
        <h3>The contents now will be displayed in card component</h3>
        <div className='card-container'>
            {products && products.map((product) => <CardComp product={product}></CardComp>)}
        </div>
    </div>
  )
}

export default Hooks