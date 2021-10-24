import classes from "./CustomInputs.css";


export function Text({input,meta,...props}){
  let isError = (meta.error&&!meta.active&&meta.visited)||props.asyncErr;
  return (
    <div>
       {props.placeholder}: <input style={{border:isError?"1px solid red":"1px solid transparent"}} {...props} {...input}/>
       <div style={{color:isError?"red":"green",opacity:isError?1:0}}>{props.asyncErr||meta.error||"No error"}</div>
    </div>
  )
}

export function Checkbox({input,meta,...props}){
  return(
    <div>
      {props.placeholder}: <input {...props} {...input}/>
    </div>
  )
}

//className={meta.error&&!meta.active&&meta.visited?classes.errorMess:classes.noError}
//style={{color:meta.error&&!meta.active&&meta.visited?"red":"green"}}
