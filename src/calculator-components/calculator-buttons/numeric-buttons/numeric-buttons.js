import React from "react";
import './numeric-buttons.css';

function NumericButton({btnPress}){
    const numbers = [{type:"NUMBER",value:'1'},{type:"NUMBER",value:'2'},{type:"NUMBER",value:'3'},{type:"NUMBER",value:'4'},{type:"NUMBER",value:'5'},{type:"NUMBER",value:'6'},{type:"NUMBER",value:'7'},{type:"NUMBER",value:'8'},{type:"NUMBER",value:'9'},{type:"NUMBER",value:'0'}];
    
    const  clickHandler = (key) =>{
         {btnPress(key)}
        console.log("From ClickHandler of Numeric Button"+key);
    }


   const numbtnlist = numbers.map((btn,index) => {return <button className="numericbuttons" id={"numericbuttons"+index} onClick={()=>clickHandler(btn)} key={btn.value}>{btn.value}</button>})
    return(
        <>
            {numbtnlist}
        </>
    )
 
}
export default NumericButton;