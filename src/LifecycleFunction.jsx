import React, { useState,useEffect } from 'react'

const LifecycleFunction=()=>{ 
    const[name,setName]=useState("Function Component");
    useEffect(()=>{
        console.log("Component Mounted");
        setTimeout(()=>{
            setName("ReactJS Function Component")
        },2000)
    },[]);
  return (<>
    <div><h1>LifecycleFunction</h1></div>
    <h4>name is ---{name}</h4>
  </>)
}
export default LifecycleFunction
