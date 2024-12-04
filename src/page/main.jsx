import React from 'react';
import '../style/main.css';
import MainItem from './mainItem';
import About from './about';
import Project from './project';

function Main() {
  return (
    <div>
        <div id="main-section" className="main-letter flex justify-center items-center h-screen">
            <p className="text-9xl font-bold text-green">portfolio</p>
        </div>
        <div className="bg-white w-2/3 mx-auto flex flex-col">
            <MainItem id="about-section">About me</MainItem>
            <About></About>
            <MainItem id="project-section">Project</MainItem>
            <Project></Project>
            <MainItem id="contact-section">Contact</MainItem>
        </div>

    </div>
    
  );
}

export default Main;