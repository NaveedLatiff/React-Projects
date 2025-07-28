import React, { useState } from 'react'
import './Accordian.css'
import { data } from './data'
const Accordian = () => {
    let [Id, setIds] = useState([])
    function toggle(id) {
        setIds(prev =>
            prev.includes(id)
                ? prev.filter(openId => openId !== id) 
                : [...prev, id]                        
        )
    }

return (
    <div className='container'>
        {data && data.length > 0 ? data.map((x) => {
            return (
                <div className='accord' key={x.id}>
                    <div className='title'>
                        <p>{x.title}</p>
                        <span onClick={(id) => {
                            toggle(x.id)
                        }}>{Id.includes(x.id)? '-' : '+'}</span>
                    </div>
                    {Id.includes(x.id) ? <div className='answer'>
                        <p>{x.answer}</p>
                    </div> : ""}
                </div>

            )
        })
            : <p>No data Found....</p>
        }
    </div>
)
}

export default Accordian
