import { useState } from "react";
interface NexusChatProps {
  chats: Array<string>;
}
const NexusChat = ({ chats }: NexusChatProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='fixed bottom-4 right-4 z-50'>
      <div
        className='relative w-16 h-16 rounded-full bg-cover bg-center cursor-pointer shadow-lg ring-4 ring-indigo-500/50'
        style={{ backgroundImage: `url('bot.jpg')` }}
        onClick={toggleChat}></div>

      {isOpen && (
        <div className='absolute bottom-20 right-0 w-72 bg-white rounded-lg shadow-lg p-4 max-h-64 overflow-y-auto'>
          {chats.map((chat, index) => (
            <div
              key={index}
              className='mb-2 bg-gray-100 p-2 rounded-lg shadow-sm text-sm text-gray-700 creato-display'>
              {chat}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NexusChat;
