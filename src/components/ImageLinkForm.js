import React from 'react';

const ImageLinkForm = ({inputChange , onSubmit}) => {
    return(
        <div>
            <p className='f3'>{'This magic brain will detect faces'}</p>
            <input className='f4 pa2  center' type='text' placeholder='Paste the URL' onChange={inputChange}/>
            <button className=' grow f4 link pv2 dib green' onClick = {onSubmit}>Detect!</button>
        </div>
    )
}
export default ImageLinkForm
