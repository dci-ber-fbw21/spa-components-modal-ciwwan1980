import React from 'react'

export default function MemberCard(props) {
console.log(props.employ)
    return (
        <div className="card">
            <h1>memeber information</h1>
            <div className="userdata">
            
            </div>
            <div className="botton-btn">
            <button >previous</button>
            <button >next</button>
            </div>
        </div>
    )


}
