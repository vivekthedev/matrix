import { useState } from "react";
import "./App.css";
import Landing from "./pages/LandingPage/Landing";
import LevelGrid from "./pages/LevelGridPage/LevelGrid";
import Frame from "./pages/LevelPage/Frame";
import LevelOne from "./pages/Levels/LevelOne";
import LevelTwo from "./pages/Levels/LevelTwo";
import LevelThree from "./pages/Levels/LevelThree";
import LevelFour from "./pages/Levels/LevelFour";
import LevelFive from "./pages/Levels/LevelFive";
function App() {
  const [name, setName] = useState("Vivek");
  const [stage, setStage] = useState("home");
  const onComplete = (nextStageName: string) => {
    setStage(nextStageName);
  };
  const pages: Record<string, JSX.Element> = {
    home: <Landing setName={setName} onComplete={onComplete} />,
    levelGrid: <LevelGrid name={name} onComplete={onComplete} />,
    level_1: (
      <Frame>
        <LevelOne onComplete={onComplete} />
      </Frame>
    ),
    level_2: (
      <Frame>
        <LevelTwo onComplete={onComplete} />
      </Frame>
    ),
    level_3: (
      <Frame>
        <LevelThree onComplete={onComplete} />
      </Frame>
    ),
    level_4: (
      <Frame>
        <LevelFour onComplete={onComplete} />
      </Frame>
    ),
    level_5: (
      <Frame>
        <LevelFive onComplete={onComplete} />
      </Frame>
    ),
  };
  return pages[stage];
}

export default App;
