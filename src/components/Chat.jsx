import React, {useState} from 'react';
import {questions} from '../data'

const Chat = ({ onClose }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleQuestionClick = (answer) => {
    setSelectedAnswer(answer);
  };

  return (
    <div className="fixed top-24 right-5 bg-slate-950 rounded-lg shadow-lg w-56 md:w-72 z-50">
      <div className="flex justify-between items-center mb-4 p-3 rounded-lg">
        <h2 className="text-xl font-bold text-slate-200"> Marium's Bot</h2>
        <button onClick={onClose} className="text-slate-200 hover:text-gray-400">
          &times;
        </button>
      </div>
      <div className="space-y-2 p-3">
        {questions.map((item, index) => (
          <button
            key={index}
            onClick={() => handleQuestionClick(item.answer)}
            className="text-left bg-slate-700 p-2 rounded text-white hover:bg-gray-500 hover:text-black"
          >
            {item.question}
          </button>
        ))}
      </div>
      {selectedAnswer && (
        <div className="my-4 p-4 bg-blue-200 rounded w-3/4 ml-10 md:ml-16">
          <p>{selectedAnswer}</p>
        </div>
      )}
    </div>
  );
};

export default Chat;
