import { useState, useEffect } from 'react'
import { TypewriterWrapper } from './styles'

interface TypewriterProps {
  text: string;
}

export function Typewriter({ text }: TypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayText(text.substring(0, currentIndex + 1));
      setCurrentIndex(currentIndex => currentIndex + 1);
    }, 100);
    return () => clearInterval(intervalId);
  }, [text, currentIndex]);

  return <TypewriterWrapper>{displayText}</TypewriterWrapper>;
};