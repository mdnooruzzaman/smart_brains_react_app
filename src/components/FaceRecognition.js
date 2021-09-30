import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageURL , box}) =>{
    return(
        <div className ='center'>
            <div className = 'mt2 , absolute'>
            <img id = 'inputImage' src={imageURL} width='400px' height='auto' alt='face'/>
            <div className='bounding_box' style = {{top: box.topRow , right:box.rightCol , bottom : box.bottomRow , left: box.left_col}}></div>
        </div>
        </div>
    )
}
export default FaceRecognition;