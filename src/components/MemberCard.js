import React from 'react'

export default function MemberCard(props) {
console.log(props.employ)
    return (
        <div className="card">
            <h1>memeber information</h1>
            <div className="userdata">
                <div className="image">
                <img src={props.employ.avatar} alt=""/></div>
                <div className="name"> {props.employ.firtName} {props.employ.lastName}</div>
                <div className="job">{props.employ.jobTitle}</div>
                <div className="bio"> {props.employ.bio} </div>
            </div>
            <div className="botton-btn">
            <button >previous</button>
            <button >next</button>
            </div>
        </div>
    )


}
