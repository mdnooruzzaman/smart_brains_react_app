import React from 'react';

const Navigation = ({routeChange}) => {
    return(
        <div style={{display:'flex' , justifyContent:'flex-end'}}>
            <p onClick = { () => routeChange('signin') } className='f3 link dim black underline pa3 pointer'>signOut</p>
        </div>
    )
}
export default Navigation;