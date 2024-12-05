import React from 'react';
// import '../style/header.css'
import HeaderItem from './headerItem'

function Header() {
  return (
    <div className="py-10 px-10">
        <HeaderItem to="main-section">main</HeaderItem>
        <HeaderItem to="about-section">about me</HeaderItem>
        <HeaderItem to="project-section">project</HeaderItem>
        <HeaderItem to="contact-section">contact</HeaderItem>
    </div>
  );
}

export default Header;
