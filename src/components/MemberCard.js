import React from 'react'

export default function MemberCard(props) {
    const previous=()=>{
        props.setindex(props.index-1)
    }
    const next=()=>{
        props.setindex(props.index+1)
    }

    return (
        <div className="card">
        <div style={{display:"flex", justifyContent:"space-between"}}>
         <h1>memeber information</h1>
        <h1 onClick={()=>props.setshow(false)}>X</h1>
        </div>
           
            <div className="userdata">
           <div className="image">
             <img src={props.employ.avatar} alt=""/>
             </div>
            <div className="name"> {props.employ.firtName} {props.employ.lastName}</div>
            <div className="job">{props.employ.jobTitle}</div>
               <div className="bio"> {props.employ.bio} </div>
            </div>
            <div className="botton-btn">
            <button onClick={previous} disabled={props.index===0} >previous</button>
            <button onClick={next} disabled={props.index===41 } >next</button>
            </div>
        </div>
    )


}
