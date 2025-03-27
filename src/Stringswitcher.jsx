import { useState, useEffect } from 'react';

//Need to make it asynchronus, error not rendering first letter

function useStringSwitcher(initialString, targetString, interval) {
  const [currentString, setCurrentString] = useState('');
  const [toggle, setToggle] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const switcher = setInterval(() => {
      setToggle((prevToggle) => !prevToggle);
      setIndex(0); // Reset index when toggling
      setCurrentString(''); // Clear the previous text when toggling
    }, interval);

    return () => clearInterval(switcher);
  }, [interval]);

  useEffect(() => {
    const text = toggle ? targetString : initialString;

    const typeEffect = setInterval(() => {
      setCurrentString((prevString) => prevString + text.charAt(index));
      setIndex((prevIndex) => prevIndex + 1);

      if (index >= text.length - 1) {
        clearInterval(typeEffect);
      }
    }, 150); // Typing interval

    return () => clearInterval(typeEffect);
  }, [index, toggle, initialString, targetString]);

  return currentString;
  
}



export default useStringSwitcher;
