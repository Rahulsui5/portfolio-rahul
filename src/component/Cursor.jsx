import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
const Cursor = () => {
    const innerRef = useRef(null)
    const outerRef = useRef(null)
  useEffect(() => {
    const inner=15,outer=40;
    const setInnerX=gsap.quickTo(innerRef.current,"x",{duration:0.12,ease:"power1.out"})
    const setInnerY=gsap.quickTo(innerRef.current,"y",{duration:0.12,ease:"power1.out"})
    const setOuterX=gsap.quickTo(outerRef.current,"x",{duration:0.5,ease:"power1.out"})
    const setOuterY=gsap.quickTo(outerRef.current,"y",{duration:0.5,ease:"power1.out"})
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setInnerX(clientX-inner/2)
      setInnerY(clientY-inner/2)
      setOuterX(clientX-outer/2)
      setOuterY(clientY-outer/2)
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <div ref={outerRef}
        id="cursor"
        className=" fixed top-0 left-0 h-[40px] w-[40px] rounded-full border-2 border-gray-700 -700 z-10 pointer-events-none"
      ></div>
        <div ref={innerRef}
          id="innerCursor"
          className=" fixed h-[15px] w-[15px] rounded-full bg-gray-700 mix-blend-difference z-10 pointer-events-none"
        ></div>
      <div>
       
      </div>
    </>
  );
};
export default Cursor;