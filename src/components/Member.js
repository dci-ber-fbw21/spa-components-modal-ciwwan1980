import React from 'react'

export default function Member(props) {
    return (
        <div>
            <div classname="member">

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