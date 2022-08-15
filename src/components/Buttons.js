import React from 'react';

const Buttons = ({color,bgColor,size,text,borderRadius}) => {
    return (
        <div>
          <button type='button'
          style={{backgroundColor:bgColor, color,borderRadius}}
          className={`text-${size} p-1 hover:drop-shadow-xl`} 
          >
            {text}
          </button>
        </div>
    );
};

export default Buttons;