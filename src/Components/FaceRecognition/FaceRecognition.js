import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ ImageURL, box }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputImage' src={ImageURL} alt='' width='500px' height='auto' />
                <div className='bounding-box' style={{top: box.topRow, left: box.leftCol, bottom: box.bottomRow, right: box.rightCol}}></div>
            </div>
        </div>
    );
}

export default FaceRecognition;