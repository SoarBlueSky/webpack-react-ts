import React,{ useEffect } from 'react';
import { initModel } from '../assets/live2d/waifu-tips.js'
import '../assets/live2d/waifu.css';
import '../assets/live2d/jquery.min.js'
function Live2D (){

    useEffect(() =>{
        initModel()
    },[])

    return <div>
            <canvas id="live2d" width="280" height="250" className="live2d"></canvas>

    </div>
}
export default Live2D;