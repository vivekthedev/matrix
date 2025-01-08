interface LevelHeaderProps {
  name: string;
}

const LevelHeader = ({ name }: LevelHeaderProps) => {
  return (
    <div className='fixed top-0 bg-opacity-0 p-4 z-50 text-center'>
      <div className='text-3xl font-bold mb-2 azonix text-white unselectable'>
        Level {name}
      </div>
    </div>
  );
};

export default LevelHeader;
