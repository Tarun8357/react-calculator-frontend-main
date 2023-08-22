import React from "react";
import './operational-buttons.css';


function OperationalButtons({btnPress}){
    const opBtn = [{type:"OPERATOR",value:"ADD",sign:"+"},{type:"OPERATOR",value:"MULTIPLY",sign:"*"},{type:"OPERATOR",value:"SUBSTRACT",sign:"-"},{type:"OPERATOR",value:"DIVIDE",sign:"/"},{type:"OPERATOR",value:"EQUALS",sign:"="}];
    
    const  clickHandler = (key) =>{
        {btnPress(key)}
       console.log("From ClickHandler of Operation Button"+key);
       
   }
 
 
 
    const opbtnlist = opBtn.map((btn,index) => {return <button className="opBtn" id={"opBtn"+index} onClick={()=>clickHandler(btn)} key={btn.value}>{btn.sign}</button>})
     return(
         <>
             {opbtnlist}
         </>
     )
}
export default OperationalButtons;