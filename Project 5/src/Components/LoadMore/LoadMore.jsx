import React, { useEffect, useState } from 'react'
import './LoadMore.css'
import axios from 'axios'

const LoadMore = () => {
    let [data,setData]=useState(null)
    let [limit,setLimit]=useState(10)
    useEffect(()=>{
        async function fetch(){
            let response=await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=0&select=title,price`)
            // console.log(response.data)
            setData(response.data.products)
        }
        fetch()
    },[limit])
    function loadMore(){
        setLimit(prev=>prev+10)
    }
  return (
    <div className='container'>
      {data && data.length>0 ? data.map(({id,title,price})=>{
        return (
            <div key={id} className='card'>
                <p>id;{id}</p>
                <p>{title}</p>
                <p>${price}</p>
            </div>
        )
      }) :"Loading"}
      {limit <100
      ?<button
        className='btn'
        onClick={loadMore}
      >Load More...</button>:""}
    </div>
  )
}

export default LoadMore
