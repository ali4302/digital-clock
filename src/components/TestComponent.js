import React, { useState, useEffect } from "react";

function TestComponent() {
  const[inputList, setInputList] =useState("buy apple");
  const[Items,setItems]= useState([])

  const itemEvent=(event)=>{
    setInputList(event.target.value)
  };
  const listOfItems=()=>{
    setItems((oldItems)=>{
      return[...oldItems,inputList];
    });
    setInputList("");

  };
 
 
  return (
    <>
    <div className="main-div">
      <div className="center-div"></div>
      <br/>
      <h1> todo list</h1>
      <br/>
      <input type="text" placeholder="Add item" 
      value={inputList}
      onChange={itemEvent}/>

      <button onClick={listOfItems}>+</button>

      <ol>
        {/*<li> {inputList}</li>*/}
       { Items.map((itemval) =>{
          return <li>{itemval}</li>

        })}
      </ol>
    </div>
    </>
    
  
  );
}

export default TestComponent;
