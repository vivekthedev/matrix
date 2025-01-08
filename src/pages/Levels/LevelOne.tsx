import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./Level.css";
import LevelHeader from "../../components/share/LevelHeader";
import NexusChat from "../../components/share/NexusChat";
import { CluesLevelOne } from "../../components/Clues";
import FinishedLevel from "../../components/share/FinishedLevel";

interface LevelOneProps {
  onComplete: (nextStageName: string) => void;
}
const LevelOne = ({ onComplete }: LevelOneProps) => {
  const [completed, setCompleted] = useState(false);
  const [switchStates, setSwitchStates] = useState(
    Array(5)
      .fill(0)
      .map(() => Array(3).fill(0))
  );
  useEffect(() => {
    if (switchStates.flat().join("") === "100000001111010") {
      setCompleted(true);
    }
  }, [switchStates]);
  const toggleSwitch = (rowIndex: number, colIndex: number) => {
    const deepCopy = switchStates.map((row) => [...row]);
    deepCopy[rowIndex][colIndex] = Number(!deepCopy[rowIndex][colIndex]);
    setSwitchStates(deepCopy);
  };

  const getRowColor = (rowIndex: number) => {
    const colors = [
      "bg-red-500",
      "bg-black",
      "bg-blue-500",
      "bg-white",
      "bg-green-500",
    ];
    return colors[rowIndex % colors.length];
  };

  return (
    <>
      <LevelHeader name={"1"} />
      <NexusChat chats={CluesLevelOne} />
      <div className=' w-[80vw] h-[80vh] bg-level-one '>
        <div className='w-full h-full flex justify-center items-center flex-col space-y-4'>
          {switchStates.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`grid grid-cols-3 gap-20 p-4 ${getRowColor(
                rowIndex
              )}`}>
              {row.map((state: any, colIndex: number) => {
                const glowingStyle = useSpring({
                  backgroundColor: state ? "yellow" : "grey",
                  boxShadow: state
                    ? "0px 0px 15px 5px rgba(255,255,0,0.7)"
                    : "0px 0px 0px 0px rgba(0,0,0,0)",
                  config: { tension: 200, friction: 20 },
                });

                return (
                  <animated.div
                    key={colIndex}
                    style={glowingStyle}
                    className='w-10 h-10 rounded-full cursor-pointer'
                    onClick={() => toggleSwitch(rowIndex, colIndex)}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
      {completed && (
        <FinishedLevel
          name={"first"}
          number={"2"}
          next={"level_2"}
          onComplete={onComplete}
        />
      )}
    </>
  );
};

export default LevelOne;
