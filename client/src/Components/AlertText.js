import React from 'react';

const AlertText = ({message, show}) => {
  return (
    <div style={{display: show ? 'block' : 'none'}}>
        {message}
    </div>
  )
}

export default AlertText;