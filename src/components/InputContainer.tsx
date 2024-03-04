import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

type InputContainerProps = {
  sendMessage: (message: string) => void;
};

export function InputContainer({ sendMessage }: InputContainerProps) {
  const [inputMessage, setInputMessage] = useState<string>('');

  return (
    <div className="w-full max-w-full flex">
      <input
        className="rounded-full flex-grow min-w-0 px-5 text-xs"
        type="text"
        name=""
        id=""
        value={inputMessage}
        onChange={(e) => {
          setInputMessage(e.target.value);
        }}
      />
      <button className="rounded-full w-8 h-8 ml-4 p-1 flex justify-center items-center">
        <FontAwesomeIcon
          icon={faPaperPlane}
          onClick={async () => {
            sendMessage(inputMessage);
          }}
        />
      </button>
    </div>
  );
}
