import React, { useState } from 'react'
import './Star.css'
import { FaStar } from 'react-icons/fa'

const Star = ({Starlength=5}) => {
  let [rating,setRating]=useState(null)
  let [hover,setHover]=useState(null)
  let clickStar=(indx)=>{
    setRating(indx)

  }
  let hoverStar=(indx)=>{
    setHover(indx)
    console.log(indx)
  }
  let leaveStar=()=>{
    setHover(rating)
  }
  return (
    <div>
      {[...Array(Starlength)].map((_,indx)=>{
        indx+=1
        return(
            <FaStar
            className={indx<= (hover || rating) ?"active":"notActive"}
            key={indx}
            onMouseMove={()=>{
                hoverStar(indx)
            }}
            onClick={()=>{
              clickStar(indx)
            }}
            onMouseLeave={()=>{
              leaveStar()
            }}
            
            size={50}
            />
        )
      })}
    </div>
  )
}

export default Star
