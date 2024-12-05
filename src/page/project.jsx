import React from 'react';
import ProjectComponent from './projectComponent';

const Project = ({}) => {
  return (
    <div className="grid grid-cols-2 gap-4 m-10 h-[100vh]">
      <ProjectComponent name="CRUD 게시판 프로젝트" description={"간단한 게시판, 게시글, 댓글을 구현한 CRUD 프로젝트"}></ProjectComponent>
      <ProjectComponent></ProjectComponent>
    </div>
  );
}

export default Project;