import React, { createContext } from 'react'
import Childcomponent from './Childcomponent.jsx'
export let dummy=createContext()
function Usecontext() {
   
    let data=[
      {
        teamimage:"https://raw.githubusercontent.com/fathima-NR/Project-MERN/Assets/cakes/ChocoholicCakehalfkg_400x400.webp",
        teamname:"blackforest",
        teamposition:"Cheif Executive",
        teamdescription:"This is some text within a card body."


      },
      {
        teamimage:"https://raw.githubusercontent.com/fathima-NR/Project-MERN/Assets/cakes/ChocoholicCakehalfkg_400x400.webp",
        teamname:"blackforest",
        teamdescribtion:"This is some text within a card body."
      }
     
      
    ]
  return (
    <dummy.Provider value={data}>

<Childcomponent/>
    </dummy.Provider>
   
  )
}

export default Usecontext