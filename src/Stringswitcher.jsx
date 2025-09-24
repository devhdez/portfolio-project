import { useState, useEffect } from "react";

function useStringSwitcher(
  initialString,
  targetString,
  switchInterval = 4000,
  typingSpeed = 150
) {
  const [currentString, setCurrentString] = useState("");
  const [activeText, setActiveText] = useState(initialString);
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Switch between initialString and targetString every X ms
  useEffect(() => {
    const switcher = setInterval(() => {
      setActiveText((prev) =>
        prev === initialString ? targetString : initialString
      );
      setIndex(0); // reset typing index
      setCurrentString(""); // clear current text
    }, switchInterval);

    return () => clearInterval(switcher);
  }, [initialString, targetString, switchInterval]);

  // Typing effect
  useEffect(() => {
    if (index < activeText.length) {
      const typing = setTimeout(() => {
        setCurrentString((prev) => prev + activeText.charAt(index));
        setIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(typing);
    }
  }, [index, activeText, typingSpeed]);

  // Cursor blinking
  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // blink speed

    return () => clearInterval(cursorBlink);
  }, []);

  return currentString;
}

export default useStringSwitcher;
