import React from 'react';
import ProjectComponent from './projectComponent';

const Project = ({name, description}) => {
  return (
    <div className="grid grid-cols-2 gap-4 m-10">
      <ProjectComponent></ProjectComponent>
      <ProjectComponent></ProjectComponent>
      <ProjectComponent></ProjectComponent>
      <ProjectComponent></ProjectComponent>
      <ProjectComponent></ProjectComponent>
      <ProjectComponent></ProjectComponent>
    </div>
  );
}

export default Project;