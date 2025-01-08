import { Background } from "../../components/share/Background";
import { useSpring, animated } from "@react-spring/web";
import { useState, useEffect } from "react";

interface LevelGridProps {
  name: string;
  onComplete: (nextStageName: string) => void;
}
const LevelGrid = ({ name, onComplete }: LevelGridProps) => {
  const [number, setNumber] = useState(1);
  const levels = Array.from({ length: 5 }, (_, index) => `${index + 1}`);
  const [infoMsg, setInfoMsg] = useState("");
  useEffect(() => {
    const storedNumber = localStorage.getItem("level");
    if (storedNumber) {
      setNumber(Number(storedNumber));
    } else {
      localStorage.setItem("level", number.toString());
    }
  }, []);

  return (
    <>
      <Background />
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <h1 className='text-3xl font-bold mb-8 text-center text-fuchsia-50 azonix'>
          Hello {name}!
        </h1>
        <h3 className='text-md font-bold creato-display-italic text-fuchsia-50 mb-3'>
          {infoMsg}
        </h3>
        <div className='grid grid-cols-5 gap-6 w-full max-w-lg'>
          {levels.map((level) => {
            const [hovered, setHovered] = useState(false);

            const styles = useSpring({
              boxShadow: hovered
                ? "0px 0px 20px 10px rgba(0, 255, 255, 0.8)"
                : "0px 0px 5px 1px rgba(0, 0, 0, 0.3)",
              transform: hovered ? "scale(1.05)" : "scale(1)",
              config: { tension: 300, friction: 15 },
            });
            const isLocked = number < parseInt(level);
            return (
              <animated.div
                key={level}
                className='flex flex-col items-center justify-center cursor-pointer locked-level border-2 border-gray-300 rounded-lg p-4 shadow-md'
                style={styles}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => {
                  if (!isLocked) {
                    onComplete(`level_${level}`);
                  } else {
                    setInfoMsg(
                      `Level ${level} is locked! Complete previous levels to unlock.`
                    );
                  }
                }}>
                <span className='text-sm text-white creato-display'>
                  {level}
                </span>
              </animated.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LevelGrid;
