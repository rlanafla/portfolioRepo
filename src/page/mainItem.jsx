import React from 'react';

const MainItem = ({id, children}) => {
  return (
    <div id={id} className="px-10">
        <p className="text-5xl font-bold text-green my-10 ">{children}</p>
    </div>
  )
}

export default MainItem;