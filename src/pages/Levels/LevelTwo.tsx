import { useState, useEffect } from "react";
import { CluesLevelTwo } from "../../components/Clues";
import LevelHeader from "../../components/share/LevelHeader";
import NexusChat from "../../components/share/NexusChat";
import FinishedLevel from "../../components/share/FinishedLevel";

import { useSpring, animated } from "@react-spring/web";

interface CardProps {
  letter: string;
}

interface AnswerCircleProps {
  sum: number;
}
const AnswerCircle = ({ sum }: AnswerCircleProps) => {
  return (
    <div className='relative w-32 h-32 flex items-center justify-center rounded-full bg-gray-800 text-white text-2xl font-bold shadow-lg cursor-pointer glow-circle'>
      {sum}
    </div>
  );
};

interface LevelTwoProps {
  onComplete: (nextStageName: string) => void;
}

const LevelTwo = ({ onComplete }: LevelTwoProps) => {
  const [completed, setCompleted] = useState(false);
  const [pairsFound, setPairsFound] = useState(0);
  const [flippedCards, setFlippedCards] = useState<
    { index: number; value: number }[]
  >([]);
  const [lockedCards, setLockedCards] = useState<number[]>([]);
  const letters = ["B", "I", "D", "T", "C", "S", "L", "N", "F", "Q", "V", "X"];
  for (let i = letters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [letters[i], letters[j]] = [letters[j], letters[i]];
  }

  const answers = [139, 152, 150, 154, 151, 174];

  const checkSum = () => {
    if (flippedCards.length === 2) {
      const sum = flippedCards[0].value + flippedCards[1].value;

      if (answers.includes(sum)) {
        console.log("Correct Match!");
        setLockedCards((prev) => [
          ...prev,
          flippedCards[0].index,
          flippedCards[1].index,
        ]);
        setFlippedCards([]);
        setPairsFound((prev) => prev + 1);
      } else {
        console.log("No Match!");
        setTimeout(() => setFlippedCards([]), 1000);
      }
    }
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      checkSum();
    }
    if (pairsFound === 6) {
      setCompleted(true);
    }
  }, [flippedCards, pairsFound]);

  const Card = ({ letter, index }: CardProps & { index: number }) => {
    const isFlipped =
      flippedCards.some((card) => card.index === index) ||
      lockedCards.includes(index);
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
      setFlipped(isFlipped);
    }, [isFlipped]);

    const { transform, opacity } = useSpring({
      opacity: flipped ? 1 : 0,
      transform: `perspective(1000px) rotateY(${flipped ? 180 : 0}deg) scale(${
        flipped ? 1.02 : 1
      })`,
      config: { tension: 400, friction: 25 },
    });

    const handleClick = () => {
      if (flipped || flippedCards.length === 2 || lockedCards.includes(index))
        return;

      setFlipped(true);
      setFlippedCards((prev) => [
        ...prev,
        { index, value: letter.charCodeAt(0) },
      ]);
    };

    return (
      <div
        className='relative w-32 h-32 cursor-pointer'
        style={{
          transformOrigin: "left center",
          perspective: "1000px",
        }}
        onClick={handleClick}>
        <animated.div
          className='absolute text-white w-32 h-32 flex bg-slate-500 items-center justify-center rounded-lg shadow-lg backface-hidden text-4xl'
          style={{
            opacity,
            transform,
            rotateY: "180deg",
          }}>
          {letter}
        </animated.div>

        <animated.div
          className='absolute card-pattern w-32 h-32 text-white flex items-center justify-center rounded-lg shadow-lg backface-hidden'
          style={{
            opacity: opacity.to((o) => 1 - o),
            transform,
          }}></animated.div>
      </div>
    );
  };

  return (
    <>
      <LevelHeader name={"2"} />
      <NexusChat chats={CluesLevelTwo} />
      <div className='w-[80vw] h-[80vh] bg-level-two bg-white creato-display'>
        <div className='w-full h-full flex justify-center items-center gap-12 space-y-4'>
          <div className='grid grid-cols-4 gap-6'>
            {letters.map((letter, index) => (
              <Card key={index} letter={letter} index={index} />
            ))}
          </div>
          <div className='grid grid-cols-2 gap-4 p-4 bg-zinc-300 bg-opacity-40 rounded-[20px]'>
            {answers.map((sum, index) => (
              <AnswerCircle key={index} sum={sum} />
            ))}
          </div>
        </div>
      </div>
      {completed && (
        <FinishedLevel
          name={"second"}
          number={"3"}
          next={"level_3"}
          onComplete={onComplete}
        />
      )}
    </>
  );
};

export default LevelTwo;
