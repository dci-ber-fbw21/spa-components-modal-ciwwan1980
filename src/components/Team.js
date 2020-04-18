import React from 'react'
import Member  from "./Member"

export default function Team(props) {

    const allTeam= props.data.map(employ=>{
        console.log(employ, "employ")
        return (<Member employ={employ}/ >)
    })

    return (
        <div className="team">
            {allTeam}
        </div>
    )
}
