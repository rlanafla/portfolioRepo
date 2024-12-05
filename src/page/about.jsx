import React from 'react';
import '../style/about.css';  // fade-in 클래스 스타일이 여기에 있어야 함
import FadeInOnScroll from '../effect/fadeInOnScroll';  // FadeInOnScroll 컴포넌트 가져오기

const About = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <FadeInOnScroll />
      
      <div className="grid grid-cols-2 bg-green w-1/2 rounded-3xl shadow-2xl">
        <div className="row-span-3">
          <img src="/selfie.jpg" className="rounded-tl-3xl rounded-bl-3xl" alt="Selfie" />
        </div>
        <div className="flex flex-col gap-3 justify-center mt-3">
          <p className="text-4xl mx-auto text-white">Narim Kim</p>
          <p className="text-xl mx-auto text-white">frontend developer</p>
        </div>
          <div className="flex rounded-full bg-white w-40 h-16 mx-auto hover:cursor-pointer github-container"
          onClick={() => window.location.href="https://github.com/rlanafla"}>
            <img src="/github.png" className="github-img"/>
            <p className="m-auto github-text">github</p>
          </div>
          <div className="flex rounded-full bg-white w-40 h-16 mx-auto hover:cursor-pointer tistory-container"
          onClick={() => window.location.href="https://rlanafla.tistory.com/"} >
            <img src="/tistory.png" className="tistory-img"/>
            <p className="m-auto tistory-text">tistory</p>
          </div>
        </div>
      </div>
  );
};

export default About;
