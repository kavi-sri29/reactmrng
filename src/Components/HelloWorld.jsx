import React from "react";

class HelloWorld extends React.Component{
    componentDidMount(){
        console.log('Component is mounting');
    }

    render(){
        return(<div>Hello World!!</div>)
    }
}

export default HelloWorld;