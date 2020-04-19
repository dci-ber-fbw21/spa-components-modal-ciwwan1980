import React, {useState} from 'react'
import Member  from "./Member"
import MemberCard from "./MemberCard"

export default function Team(props) {


    const [show,setshow]=useState(false)

    const getEmploy=(employ)=>{
        console.log(employ)
    }


    const allTeam= props.data.map(employ=>{
        // console.log(employ, "employ")
        return (<Member employ={employ} getEmploy={getEmploy}/ >)
    })

    return (
        <div className="team">
            {allTeam}
            {show && <MemberCard/>}
        </div>
    )
}
