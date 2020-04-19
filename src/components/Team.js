import React, {useState} from 'react'
import Member  from "./Member"
import MemberCard from "./MemberCard"

export default function Team(props) {


    const [show,setshow]=useState(false)
    const [index,setindex]=useState(0)

    const getEmploy=(eachEmploy)=>{
        // console.log(eachEmploy)
        const myIndex=props.data.indexOf(eachEmploy)
        // console.log(props.data, "props.Data")
        setindex(myIndex)
        setshow(true)
    }


    const allTeam= props.data.map(employ=>{
        // console.log(employ, "employ")
        return (<Member key={employ.id} employ={employ}  getEmploy={getEmploy}/ >)
    })

    return (
        <div className="team">
            {allTeam}
            {show && <MemberCard setindex={setindex} setshow={setshow} index={index} employ={props.data[index]} />}
        </div>
    )
}


