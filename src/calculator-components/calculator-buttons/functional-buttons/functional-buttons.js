import React from 'react';
import './functional-buttons.css';

function FunctionalButton({btnPress}){
    const functions = [{type:String,value:"AC"},{type:String,value:"DEL"},{type:String,value:"UNDO"},{type:String,value:"REDO"}];
    
    const  clickHandler = (key) =>{
        {btnPress(key)}
       console.log("From ClickHandler of function Button"+key);
   }
 
 
    const funbtnlist = functions.map((btn,index) => {return <button className='functionalbuttons' onClick={()=>clickHandler(btn)} key={btn.value}>{btn.value}</button>})
     return(
         <>
             {funbtnlist}
         </>
     )
  
        
}
export default FunctionalButton;