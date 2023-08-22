import React, { useEffect, useState } from "react";
import Display from "../calculator-display/calculator-display";
import NumericButton from "../calculator-buttons/numeric-buttons/numeric-buttons";
import './calculator.css';
import FunctionalButton from "../calculator-buttons/functional-buttons/functional-buttons";
import OperationalButtons from "../calculator-buttons/operational-buttons/operational-buttons";
import AuthService from "../services/authentication.service";
import axios from "axios";

function Calculator(){

  const apiUrl = "http://localhost:8080/CLEANSPRINGSECURITY/calc";
  
  let axiosConfig ={
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Authorization':"Bearer " + AuthService.authHeader()
    }
}

  let [initValue, setValue]=useState('0');
  const [containerStack, setConatainerStack]=useState([]);
  const [access,setAccess] =  useState(false);

  useEffect(()=>{
    console.log("use effect "+ AuthService.hasAccess())
    if(AuthService.hasAccess()){
      setAccess(true);
    }
    console.log(containerStack)
  },[])

  const addExpStack = (obj) => {
    setConatainerStack(prev=>([...prev,{type:obj.type,value:obj.value}]));
  }

  const numbtnClickHandler = (numValue) => {
    setValue(initValue+numValue.value);
    if(initValue==='0'){
      initValue+=numValue.value;
      addExpStack(numValue);
    } else if (containerStack[containerStack.length-1].type==="NUMBER"){
       const val =  containerStack[containerStack.length-1].value + numValue.value ;
       containerStack.pop();
       addExpStack({type:"NUMBER",value:val});
    }else{
    
      addExpStack({type:"NUMBER",value:numValue.value});
   
    }

    }
    

  const functionBtnClickHandler = (fnValue) =>{
    if(fnValue.value==='AC'){
      setValue("");
    }
    else if (fnValue.value==='DEL'){
      setValue(initValue.substring(0,initValue.length-1))
    }
   
  }

  const opBtnClickHandler=(opValue)=>{
    setValue(opValue.sign);
   if (opValue.value==="EQUALS"){ 
      if(access==true){
        // eval(containerStack);
          axios.post(apiUrl,JSON.stringify(containerStack),axiosConfig)
          .then( (res)=>{console.log(res.data)
          setValue(res.data)})
          .catch((err)=>{console.error(err)})
      }else{
        alert(" you are not authorized")
      }  
   }else if(containerStack[containerStack.length-1].type==="OPERATOR") {
    containerStack.pop();
    addExpStack({type:"OPERATOR",value:opValue.value});
  }
  else{
    addExpStack({type:"OPERATOR",value:opValue.value});
  }
  }
 
    return (
      access ?    <div className="calculatorContainer">
      <div className="diplayContainer"><Display name={initValue}/></div>
      <div className="btnContainer">
      <div className="functionalBtnContainer"><FunctionalButton btnPress={functionBtnClickHandler}/></div>
      <div className="numericBtnContainer"><NumericButton btnPress={numbtnClickHandler}/></div>
      <div className="operationBtnContainer">
      <OperationalButtons btnPress={opBtnClickHandler}/>
      </div>
      </div>
      </div> : <div className="calculatorContainer"> Sorry you are not authorized</div>
     

    
      );


}
export default Calculator;



