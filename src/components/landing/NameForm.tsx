import { useState } from "react";

interface NameFormProps {
  setName: (name: string) => void;
  onComplete: (nextStageName: string) => void;
}

export const NameForm = ({ setName, onComplete }: NameFormProps) => {
  const [input, setInput] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setName(input);
      onComplete("levelGrid");
    }
  };

  return (
    <div className='flex flex-col items-center justify-center p-4  relative top-8'>
      <h1 className='text-8xl space-crusaders-italic text-white mb-12 '>
        Matrix!
      </h1>

      <div className='bg-slate-700 rounded-lg p-12 w-full max-w-md'>
        <h2 className='text-2xl text-white mb-6 text-center azonix'>
          are you Ready for the Adventure?
        </h2>

        <form onSubmit={handleSubmit} className='flex gap-2'>
          <input
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='enter your name agent'
            className='flex-1 px-4 py-2 rounded-lg bg-white text-slate-800 placeholder-slate-400 focus:outline-none creato-display'
          />

          <button
            type='submit'
            className='px-6 py-2 bg-white text-slate-800 rounded-lg creato-display hover:bg-slate-100 transition-colors duration-200'>
            begin
          </button>
        </form>
      </div>
    </div>
  );
};
