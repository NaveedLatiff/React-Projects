import React, { useEffect, useState } from 'react'
import './Slide.css'
import axios from 'axios'
import leftArrow from '../../assets/leftArrow.svg'
import rightArrow from '../../assets/rightArrow.svg'

const Slide = () => {
    let [data, setData] = useState(null)
    let [currentIndx, setCurrentIndx] = useState(0)
    useEffect(() => {

        async function fetch() {
            try {
                let response = await axios.get('https://picsum.photos/v2/list?page=1&limit=5')
                setData(response.data)
                // Loading Image 
                response.data.forEach((img) => {
                    const image = new Image();
                    image.src = img.download_url;
                });

            }
            catch (err) {
                console.log(err)
            }
        }
        fetch()
    }, [])
    function handleNext() {
        setCurrentIndx((prev)=>prev===data.length-1?0:prev+1)
    }
    function handlePrev() {
        setCurrentIndx((prev)=>prev===0?data.length-1:prev-1)
    }
    function selectBullets(indx){
        setCurrentIndx(prev=>prev!==indx?indx:prev)
    }
    return (

        <div className='slider'>
            {data
                ? <>
                    <img
                        className='arrow right'
                        src={leftArrow}
                        alt="left"
                        onClick={handlePrev}
                    />

                    <img className='slide '
                        key={data[currentIndx].id}
                        src={data[currentIndx].download_url}
                        alt={data[currentIndx].download_url}
                    />
                    <div className='bullets-cont'>
                        {data.map((_, indx) => {
                            return <span
                                key={indx}
                                className={indx===currentIndx?'bullets bullets-active':'bullets'}
                                onClick={()=>{
                                    selectBullets(indx)
                                }}
                            ></span>
                        })}
                    </div>

                    <img
                        className='arrow left'
                        src={rightArrow}
                        alt="right"
                        onClick={handleNext}
                    />
                </>
                : <p>Images Loading Please Wait....</p>}
        </div>
    )
}

export default Slide
