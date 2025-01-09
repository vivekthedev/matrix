import { useEffect, useState } from "react";
import "./Level.css";
import LevelHeader from "../../components/share/LevelHeader";
import NexusChat from "../../components/share/NexusChat";
import FinishedLevel from "../../components/share/FinishedLevel";
import { CluesLevelFive, TerminalOutputs } from "../../components/Clues";
import Terminal from "react-console-emulator";

const commands = {
  echo: {
    description: "Echo a passed string.",
    usage: "echo <string>",
    fn: (...args: any) => args.join(" "),
  },
  ls: {
    description: "List directory contents.",
    fn: () => ["main.so", "instructions.txt"].join("\n"),
  },
  cat: {
    description: "Concatenate files and print on the standard output.",
    fn: (...args: any) => {
      if (args[0] === "instructions.txt") {
        return "DECODE the file main.so. Where the key could possibly be? ";
      }
      return "File not found";
    },
  },
  cd: {
    description: "Change the shell working directory.",
    fn: () => "Permission denied",
  },
  pwd: {
    description: "Print name of current/working directory.",
    fn: () => "/home/me",
  },
  whoami: {
    description: "Print the current user.",
    fn: () => "me",
  },
  readelf: {
    description: " Display information about the contents of ELF format files",
    fn: (...args: any) => {
      if (args.length === 0 || args[0] === "--help") {
        return TerminalOutputs.readelfUsage;
      }
      if (args[0] === "-h" && args[1] === "main.so") {
        return TerminalOutputs.readElfHeader;
      }
      if (args[0] === "-l" && args[1] === "main.so") {
        return TerminalOutputs.readElfProgramHeaders;
      }
      if (args[0] === "-S" && args[1] === "main.so") {
        return TerminalOutputs.readElfSectionHeaders;
      }
      if (args[0] === "-g" && args[1] === "main.so") {
        return TerminalOutputs.readElfSectionGroups;
      }
      if (args[0] === "-p") {
        if (args[1] === "main.so") {
          return TerminalOutputs.readelfUsage;
        } else if (args[2] === "main.so") {
          if (args[1].startsWith(".")) {
            try {
              const p: keyof typeof TerminalOutputs.stringDump = args[1].slice(
                1
              ) as keyof typeof TerminalOutputs.stringDump;
              const output = TerminalOutputs.stringDump[p];
              return output;
            } catch (error) {
              return `readelf: Warning: Section '${args[1]}' was not dumped because it does not exist`;
            }
          } else {
            return `readelf: Warning: Section '${args[1]}' was not dumped because it does not exist`;
          }
        }
      }
      return "Invalid option";
    },
  },
};

interface LevelFiveProps {
  onComplete: (nextStageName: string) => void;
}
const LevelFour = ({ onComplete }: LevelFiveProps) => {
  const [completed, setCompleted] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (e: any) => {
    const inputValue = e.target.value;
    const output = inputValue.toUpperCase();
    setValue(output);
  };
  useEffect(() => {
    if (value === "YOUFOUNDME") {
      console.log(value);
      setCompleted(true);
    }
  }, [value]);
  return (
    <>
      <LevelHeader name={"5"} />
      <NexusChat chats={CluesLevelFive} />
      <div className='w-[80vw] h-[80vh] bg-level-five creato-display flex items-center flex-col justify-center gap-10 '>
        <Terminal
          commands={commands}
          promptLabel={"me@core:~$"}
          className='w-9/12 h-3/6 overflow-auto'
        />
        <input
          id='number-input'
          type='text'
          value={value}
          maxLength={10}
          onChange={handleChange}
          className='w-64 p-3 border-2 border-blue-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-center text-xl bg-white'
          placeholder=' enter passcode'
        />
      </div>

      {completed && (
        <FinishedLevel
          name={"fifth"}
          number={"6"}
          next={"levelGrid"}
          onComplete={onComplete}
        />
      )}
    </>
  );
};

export default LevelFour;
