import React, {useState} from "react";
export default function Hooks(){
    const [name,setName] = useState("Mert Kamalı");
    return(<div>
        <p>Hello From Hooks - {name}</p>
        <input type= "text" onChange={
                    (e)=> {  setName(e.target.value)}
            }  />
        </div>)
}