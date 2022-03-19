import React from 'react'

export default function Map() {
    let data = {'first':'lorem','second':'spam','third':'ipsum','fourth':'dolor'}
    let data2 = {'first':'lorem'}

    let filter = Object.keys(data).map((key,index)=>{
        
        return(
            data2[key]??<p key={index}>{key}:{data[key]}</p>
        ) 
    })

    const maodata = Object.keys(data2).map((key,index)=>{
        return <p key={index}>{key}:{data[key]}</p>
    })
  return (
    <div>map
        {filter}
        <br></br>
        {maodata}
    </div>
  )
}
