import React, {Component} from "react";
export default class Classes extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"Mert Kamalı" 
        }
    }
    render(){
        return(<div>
            <p>Hello From Hooks - {this.state.name}</p>
            <input type= "text" onChange={
                        (e)=> {  this.setState({name:e.target.value})}
                }  />
            </div>)
    }
}
