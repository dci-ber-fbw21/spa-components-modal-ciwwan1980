import React from 'react'

export default function Member(props) {
    return (
        <div>
            <div className="member" onClick={()=>props.getEmploy(props.employ.id)}>

             <div className="top">
            </div>

            <div className="bottom">
                <div className="image">
                    <img src={props.employ.avatar} alt=""/>
                </div>

                <div className="name">{props.employ.firstName} {props.employ.lastName} </div>
                <div className="job">{props.employ.jobTitle}</div>
            </div>
            
            </div>
        </div>
    )
}
