import { useEffect, useState } from "react";
import "./Level.css";
import LevelHeader from "../../components/share/LevelHeader";
import NexusChat from "../../components/share/NexusChat";
import FinishedLevel from "../../components/share/FinishedLevel";
import { CluesLevelFour } from "../../components/Clues";
import clueImageOne from "../../assets/clue_lv_four_1.png";
import clueImageTwo from "../../assets/clue_lv_four_2.jpg";
import clueImageThree from "../../assets/clue_lv_four_3.png";

interface ImageCardProps {
  imageUrl: string;
  imageName?: string;
}

const ImageCard = ({ imageUrl, imageName }: ImageCardProps) => {
  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = imageName || "downloaded_image";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='w-60 flex flex-col items-center shadow-lg p-4 bg-white rounded-lg'>
      <div className='w-full aspect-square overflow-hidden'>
        <img
          src={imageUrl}
          alt='Card'
          className='w-full h-full object-cover rounded-lg'
        />
      </div>
      <button
        onClick={downloadImage}
        className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-all'>
        Download
      </button>
    </div>
  );
};

interface LevelFourProps {
  onComplete: (nextStageName: string) => void;
}
const LevelFour = ({ onComplete }: LevelFourProps) => {
  const [completed, setCompleted] = useState(false);
  const [input, setInput] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (e: any) => {
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue)) {
      setValue(inputValue);
      if (inputValue.length === 8) {
        setInput(true);
        e.target.style.boxShadow = "0 0 10px red";
        setTimeout(() => {
          e.target.style.boxShadow = "none";
          setValue("");
        }, 2000);
      }
    }
  };
  useEffect(() => {
    if (value === "24112001") {
      setCompleted(true);
    }
  }, [input]);
  return (
    <>
      <LevelHeader name={"4"} />
      <NexusChat chats={CluesLevelFour} />
      <div className='w-[80vw] h-[80vh] bg-level-four  creato-display flex items-center flex-col justify-center gap-10 '>
        <div className='flex gap-10 justify-center items-center w-full'>
          <ImageCard imageName={"Hola!Detective"} imageUrl={clueImageTwo} />
          <ImageCard imageName={"Hello!Detective"} imageUrl={clueImageOne} />
          <ImageCard
            imageName={"Bonjour!Detective"}
            imageUrl={clueImageThree}
          />
        </div>
        <input
          id='number-input'
          type='text'
          value={value}
          maxLength={8}
          onChange={handleChange}
          className='w-64 p-3 border-2 border-blue-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-center text-xl bg-white'
          placeholder=' numbers only'
        />
      </div>

      {completed && (
        <FinishedLevel
          name={"fourth"}
          number={"5"}
          next={"level_5"}
          onComplete={onComplete}
        />
      )}
    </>
  );
};

export default LevelFour;
