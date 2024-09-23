import React, { useRef } from 'react'

function Marklist() {
   
     let calculateTenthResult = (
        sanMarks,
        engMarks,
        phyMarks,
        mathAMarks,
        cheMarks,
        mathBMarks,
         passFn, 
        failFn)=>{

        let passMarks =35;

        if (sanMarks>=passMarks&&
            engMarks>=passMarks&&
            phyMarks>=passMarks&&
            mathAMarks>=passMarks&&
            cheMarks>=passMarks&&
            mathBMarks>=passMarks) 
            {
              passFn();
        } else {
            failFn();
        }
     }

     calculateTenthResult(37,26,78,67,76,90,()=>{
        console.log(`Student passed in tenth`)
     },()=>{
        console.log(`Student failed in tenth`)
     })
 
}

export default Marklist