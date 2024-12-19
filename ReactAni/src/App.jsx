import React, { useState } from "react";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect, useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const App = () => {

  const [showCanvas, setshowCanvas] = useState(false);
  const headingref = useRef(null);
  const growingSpan = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  useEffect(() => {
    const handleClick =  (e) => {
      setshowCanvas((prevShowCanvas) => {
        if(!prevShowCanvas) {
          gsap.set(growingSpan.current, {
            top: e.clientY,
            left: e.clientX,
          });
    
          gsap.to("body", {
            backgroundColor: '#fd2c2a',
            color: '#000',
            duration:1.2,
            ease: "power2.inOut",
          })
    
          gsap.to(growingSpan.current, {
            scale: 1000,
            duration: 2,
            ease: "power2.inOut",
            onComplete: () => {
              gsap.set(growingSpan.current, {
                scale: 0,
                clearProps: "all"
              });
            }
          });
        }
        else{
          gsap.to("body", {
            color: "#fff",
            backgroundColor: "#000",
            duration: 1.2,
            ease: "power2.inOut",
          })
        }
        return !prevShowCanvas;
      });
    };

    const headingElement = headingref.current;
    headingElement.addEventListener("click", handleClick);

    return () => headingElement.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <span ref={growingSpan} className="growing block fixed top-[-20px] left-[-20px] w-5 h-5 rounded-full"></span>
      <div className="w-full font-[Helvetica_Now_Display]">
        <div className="relative mt-11 w-full h-[500px] mb-10"> {/* Adjust height */}
          {showCanvas && data[0].map((canvasdets, index) => (
            <Canvas key={index} details={canvasdets} />
          ))}
          <div className="w-full h-screen relative z-[1]">
            <nav className="fixed w-full top-0 left-0 w-full justify-between z-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-left pl-0">
                    <a href="#" className=" font-bold text-4xl -ml-20">
                      thirtysixstudios
                    </a>
                  </div>
                  <div className="hidden md:block">
                    <div className="flex items-baseline space-x-4">
                      {[
                        ['Home', '#'],
                        ['About', '#about'],
                        ['Projects', '#projects'],
                        ['Contact', '#contact'],
                      ].map(([name, url]) => (
                        <a
                          key={name}
                          href={url}
                          className="text gap-20 text-2xl hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                        >
                          {name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <div className="textcontainer w-full mt-[5%] px-[25%]">
              <div className="text w-[100%]">
                <h3 className="text-4xl leading-[1.2]">
                  At Thirtysixstudio, we<br></br>
                  build immersive digital<br></br>
                  experiences for brands<br></br>
                  with a purpose.
                </h3>
                <p className="text-md w-[80%] mt-6 font-md">
                  We're a boutique production studio focused on design,<br></br>
                  motion, and creative technology, constantly reimagining<br></br>
                  what digital craft can do for present-time ads and<br></br>
                  campaigns.
                </p>
                <p className="text-md w-[80%] mt-6 font-md">Scroll</p>
              </div>
            </div>
            <div className="w-full absolute bottom-0 left-0">
              <h1 ref={headingref} className="text-[15.8rem] font-normal tracking-tight leading-none">Thirtysixstudio</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="2nd-canvas w-full h-screen mt-[20%] px-10">
        <div className="relative mt-11 w-full h-[500px] mb-10">
          {showCanvas && data[1].map((canvasdets, index) => (
            <Canvas key={index} details={canvasdets} />
          ))}
          <div className="relative z-[1]">
            <h1 className="text-8xl tracking-tighter">about the brand</h1>
            <p className="text-4xl leading-[1.5] w-[80%] mt-10 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              ipsum temporibus alias labore quaerat quia cupiditate itaque magni, autem odio,
              eos adipisci nisi cumque inventore dolor doloremque
              delectus qui? Eligendi
              praesentium veniam id nostrum!
            </p>
          </div>
          <img className="w-[50%] mt-10"
            src="https://directus.funkhaus.io/assets/b3b5697d-95a0-4af5-ba59-b1d423411b1c?withoutEnlargement=true&fit=outside&width=1400&height=1400"
            alt="" />
        </div>
        <div className="z-[10]">
          <div className="relative mt-11 w-full h-[500px] mb-10 z-[-1]"> {/* Adjust height */}
            {showCanvas && data[0].map((canvasdets, index) => (
              <Canvas key={index} details={canvasdets} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
