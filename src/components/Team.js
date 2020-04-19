import React, {useState} from 'react'
import Member  from "./Member"
import MemberCard from "./MemberCard"

export default function Team(props) {


    const [show,setshow]=useState(false)
    const [index,setindex]=useState(0)

    const getEmploy=(employ)=>{
        // console.log(employ)
        const myIndex=props.data.indexOf(employ)
        console.log(props.data, "props.Data")
        setshow(true)
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
