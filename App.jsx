import React, { useState } from "react";
import './index.css';
function App(){

    let [name,setName]=useState('');
    let [lastname,setlastname]=useState('')
    let [fullName,setfullName] =useState('')
    let [lastnewName,setlastnewName]=useState('');


    let InputEvent=(event)=>{
        setName(event.target.value);
    }
    
    let onSubmit=(event)=>{
    event.preventDefault()
        setfullName(name)
        setlastnewName(lastname)
    }

    let InputEvent2=(event)=>{
        setlastname(event.target.value)
    }

    return(
        <>
        <form onSubmit={onSubmit}>
            <div>
    
            <h1>Hello {fullName} {lastnewName}</h1>
            <input 
                type="text" 
                placeholder="ENTER YOUR FIRSTNAME" 
                
                onChange={InputEvent}
                value={name}
            />
            <input 
                type="text" 
                placeholder="ENTER YOUR LASTNAME" 
                
                onChange={InputEvent2}
                value={lastname}
            />
            <button type="submit" onClick={onSubmit}>submit me😊</button>
            </div>
        </form>
        </>
    )
}
export default App