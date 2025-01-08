import { ParticleBackground } from "../../components/landing/ParticleBackground";
import { NameForm } from "../../components/landing/NameForm";

interface LandingProps {
  setName: (name: string) => void;
  onComplete: (nextStageName: string) => void;
}

const Landing = ({ setName, onComplete }: LandingProps) => {
  return (
    <>
      <ParticleBackground />
      <NameForm setName={setName} onComplete={onComplete} />
    </>
  );
};

export default Landing;
