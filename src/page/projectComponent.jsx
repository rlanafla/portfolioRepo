import React from 'react';

const ProjectComponent = ({name, description}) => {
  return (
  <div className="m-10 rounded bg-green h-48 transform shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer">
      <div className="flex flex-col justify-center ml-3 h-full">
        <p className="text-3xl text-white">{name}</p>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
}

export default ProjectComponent;