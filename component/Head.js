import React from 'react'
import four from './four.jpg'

function Head() {
    return (
        <div className="h-96 w-full mr-40 -mt-12 ">
            <div  >
                 {<img className="h-40% w-50% object-cover object center " src={four} alt="cloud"/>}
            </div>
        
            <div  className="-mt-96 ml-56">
                <h1 className="ml-56 mt-20 font-bold text-4xl text-gray-700">Weather Info and More...</h1>
            </div>
        </div>
    )
}

export default Head
