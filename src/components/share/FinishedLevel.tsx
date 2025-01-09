import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

interface FinishedLevelProps {
  name: string;
  number: string;
  next: string;
  onComplete: (nextStageName: string) => void;
}

const FinishedLevel = ({
  name,
  number,
  next,
  onComplete,
}: FinishedLevelProps) => {
  const { width, height } = useWindowSize();
  localStorage.setItem("level", number);

  return (
    <>
      <Confetti width={width - 100} height={height - 50} />

      <div className='back w-full h-full absolute bg-slate-800 opacity-50'></div>
      <div className='flex flex-col w-full h-full justify-center items-center absolute  space-crusaders-italic'>
        <div className='text-white  text-4xl text-center unselectable '>
          Congratulations!
        </div>
        <div className='text-white  text-3xl text-center unselectable '>
          You have completed the {name} level.
        </div>
        <button
          onClick={() => onComplete(next)}
          className='p-4 mt-8 bg-red-300 w-fit text-white rounded-full outline-none focus:ring-4 focus:ring-blue-300 hover:bg-blue-700 focus:outline-none'>
          <span className='text-xl'>Go to Next Level </span>
        </button>
      </div>
    </>
  );
};

export default FinishedLevel;
