import React from "react";
import { Background } from "../../components/share/Background";
interface FrameProps {
  children: React.ReactNode;
}
const Frame = ({ children }: FrameProps) => {
  return (
    <>
      <Background />
      <div className='container w-screen h-screen flex justify-center items-center'>
        {children}
      </div>
    </>
  );
};

export default Frame;
