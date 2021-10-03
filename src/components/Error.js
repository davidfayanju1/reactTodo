import React from 'react';

const Error = ({err}) => {
    
    return ( 
        <div className="error">
            <h1>{ err }</h1>
        </div>
     );
    
}
 
export default Error;