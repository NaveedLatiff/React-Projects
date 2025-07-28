import React, { useEffect, useRef, useState } from 'react'
import './RandomColor.css'

const RandomColor = () => {
    let [color, setColor] = useState(null)
    function randomRGBColor() {
        let R = Math.floor(Math.random() * 256)
        let G = Math.floor(Math.random() * 256)
        let B = Math.floor(Math.random() * 256)
        let rgbColor = `rgb(${R},${G},${B})`
        ref.current.style.backgroundColor = rgbColor
        setColor(rgbColor)
    }
    function randomHexColor() {
        let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
        let hexColor = "#"
        for (let i = 0; i < 6; i++) {
            hexColor += hex[Math.floor(Math.random() * 16)]
            ref.current.style.backgroundColor = hexColor
        }
        setColor(hexColor)
    }
    function randomColor(){
        Math.random() < 0.5 ? randomRGBColor() : randomHexColor()

    }

    let ref = useRef()

    return (
        <div ref={ref} className='container'>
            <p>{color ? "Color : " + color : ""}</p>
            <button className='btn' onClick={randomRGBColor}>Generate RGB Color</button>
            <button className='btn' onClick={randomHexColor}>Generate HEX Color</button>
            <button className='btn' onClick={randomColor}>Generate RANDOM Color</button>
        </div>
    )
}

export default RandomColor
