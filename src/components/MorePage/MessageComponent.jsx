import { useEffect, useState } from "react";




const MessageComponent = ({ message, index }) => {
    const [displayMsg1, setDisplayMsg1] = useState(false);
    const [displayMsg2, setDisplayMsg2] = useState(false);

    useEffect(() => {
      const timeout1 = setTimeout(() => {
        setDisplayMsg1(true);
      }, (index + 1) * 3000);
  
      const timeout2 = setTimeout(() => {
        setDisplayMsg2(true);
      }, (index + 1) * 3000 + 2000);
  
      return () => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
      };
    }, [index]);
  
   
    return (
  <>
  
        <div className="flex flex-col space-y-4" >
          <div className="flex justify-end pt-4">
            {displayMsg1 && (
              <div className="flex">
                <div className="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
                  {message.msg1}
                </div>
              </div>
            )}
          </div>
          {displayMsg2 && (
            <div className="flex">
              <div className="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
                {message.msg2}
              </div>
            </div>
          )}
        </div>
  
        </>
    );
  };

  export default MessageComponent;