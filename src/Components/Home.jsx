import React,{useState} from 'react';

const Home = (props) => {
    let title = props.heading1;
    let values = props.data1;
   

    let name = 'Robin';

    const greet = () => {
        alert('Welcome to home');
    }

    let imageSrc = 'logo192.png';
    let names = ['John','James','Smith', 'Jorgan'];
    
    return(
        //root or react fragment
        <>      
        <div>
            Welcome {name}
        </div>
        <div> 
            
            <button className="btn-class"  style={{'borderRadius':'10px','fontWeight':'500'}} onClick={() => greet()}>Click me</button>
        </div>
        <div>
            <p>This image is static image</p>
            <img src='logo192.png' alt='reactlogo' height='50px' width='50px'/>
        </div>
        <div>
            <p>This image is dynamic image</p>
            <img src={imageSrc} alt='reactlogo'/>
        </div>
        <hr />
        <p>This is static values that is listed</p>
        <ul>
            <li>Apple</li>
            <li>Orange</li>
            <li>Banana</li>
            <li>Kiwi</li>
            <li>Dragon Fruit</li>
        </ul>
        <hr />
        <div>
            <p>This is the list of items rendered dynamically</p>
            <ul>
                {
                    names ? names.map((name) => <li>{name}</li>) : 'Loading....'
                }
            </ul>
        </div>
        <hr />
        <div>
            <h3>{title}</h3>
            <ul>
                {
                    values.map((value) => <li>{value}</li>)
                }
            </ul>
        </div>
        </>
       
    )
}

export default Home;