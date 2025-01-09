import { useState, useEffect } from "react";
import { animated } from "@react-spring/web";
import "./Level.css";
import LevelHeader from "../../components/share/LevelHeader";
import NexusChat from "../../components/share/NexusChat";
import FinishedLevel from "../../components/share/FinishedLevel";
import { CluesLevelThree } from "../../components/Clues";

interface LevelThreeProps {
  onComplete: (nextStageName: string) => void;
}
const LevelThree = ({ onComplete }: LevelThreeProps) => {
  const [completed, setCompleted] = useState(false);
  const [inputValues, setInputValues] = useState(Array(8).fill(""));
  const [answer, setAnswer] = useState("");
  let grid = Array(8)
    .fill(null)
    .map(() => Array(8).fill(false));
  const whiteShadeCells = [
    [0, 1],
    [0, 4],
    [0, 5],
    [0, 6],
    [0, 7],
    [1, 1],
    [1, 3],
    [2, 1],
    [2, 5],
    [2, 7],
    [3, 1],
    [3, 4],
    [3, 5],
    [3, 6],
    [4, 1],
    [4, 3],
    [4, 5],
    [5, 1],
    [5, 4],
    [6, 1],
    [6, 4],
    [6, 7],
    [7, 1],
    [7, 3],
    [7, 6],
    [7, 7],
  ];

  whiteShadeCells.forEach(([x, y]) => {
    grid[x][y] = true;
  });

  const handleInputChange = (index: number, value: string) => {
    if (value.length <= 1 && /[a-zA-Z]/.test(value)) {
      const newInputValues = [...inputValues];
      newInputValues[index] = value.toUpperCase();
      setInputValues(newInputValues);
      const nextInput = document.getElementById(`input-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };
  useEffect(() => {
    if (answer === "OPENTHIS") {
      setCompleted(true);
    }
  }, [answer]);
  const checkAnswer = () => {
    setAnswer(inputValues.join(""));
    setInputValues(Array(8).fill(""));
  };

  return (
    <>
      <LevelHeader name={"3"} />
      <NexusChat chats={CluesLevelThree} />
      <div className='w-[80vw] h-[80vh] bg-level-three creato-display flex items-center justify-center '>
        <div className='container flex items-center justify-center gap-9'>
          <div className='grid grid-cols-8 gap-1 w-fit h-fit bg-slate-50 bg-opacity-20 p-10 rounded-lg'>
            {grid.map((row, rowIndex) =>
              row.map((cell, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`w-10 h-10 ${
                    cell ? "bg-neutral-200" : "bg-slate-950"
                  }`}
                />
              ))
            )}
          </div>
          <div className='right'>
            <div className='flex justify-center gap-2'>
              {inputValues.map((digit, index) => (
                <animated.input
                  key={index}
                  id={`input-${index}`}
                  type='text'
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  className={`w-12 h-12 text-center border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 `}
                />
              ))}
            </div>

            <button
              className='mt-4 p-4 bg-blue-500 text-white rounded-lg focus:outline-none hover:bg-blue-700 transition-all'
              onClick={() => checkAnswer()}>
              Check Answer
            </button>
          </div>
        </div>
      </div>
      {completed && (
        <FinishedLevel
          name={"third"}
          number={"4"}
          next={"level_4"}
          onComplete={onComplete}
        />
      )}
    </>
  );
};

export default LevelThree;
