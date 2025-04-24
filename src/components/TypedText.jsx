/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

const TypedText = ({ sentences = [], speed = 70, delayBetween = 1000 }) => {
  const [displayed, setDisplayed] = useState('');
  const [sentenceIndex, setSentenceIndex] = useState(0);

  useEffect(() => {
    if (sentences.length === 0) return;

    let currentText = '';
    let currentChar = 0;
    setDisplayed('');

    const interval = setInterval(() => {
      currentText += sentences[sentenceIndex][currentChar];
      setDisplayed(currentText);
      currentChar++;

      if (currentChar >= sentences[sentenceIndex].length) {
        clearInterval(interval);
        // Wait a moment before switching to the next sentence
        setTimeout(() => {
          setSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
        }, delayBetween);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [sentenceIndex, sentences, speed, delayBetween]);

  return (
    // the span is the text that is coming up on the site, can give the span any class name to help with css
    <span className="typed-text">
      {displayed}
      <span className="cursor">|</span>
    </span>
  );
};

export default TypedText;
