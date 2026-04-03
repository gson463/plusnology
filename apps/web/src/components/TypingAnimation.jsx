import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TypingAnimation = ({
  phrases = [],
  speed = 100,
  pauseDuration = 2500,
  showCursor = true,
  className = "",
  highlightClassName = ""
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Convert speed from ms to seconds for Framer Motion
  const staggerDelay = speed / 1000;

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const charVariants = {
    hidden: { display: 'none', opacity: 0 },
    visible: { display: 'inline', opacity: 1 }
  };

  const renderPhrase = (phrase) => {
    const words = phrase.split(' ');
    
    if (words.length === 1) {
      return (
        <span className={highlightClassName}>
          {phrase.split('').map((char, index) => (
            <motion.span key={`word-${index}`} variants={charVariants}>
              {char}
            </motion.span>
          ))}
        </span>
      );
    }

    const lastWord = words.pop();
    const restOfPhrase = words.join(' ') + ' ';

    return (
      <>
        {restOfPhrase.split('').map((char, index) => (
          <motion.span key={`rest-${index}`} variants={charVariants}>
            {char}
          </motion.span>
        ))}
        <span className={highlightClassName}>
          {lastWord.split('').map((char, index) => (
            <motion.span key={`last-${index}`} variants={charVariants}>
              {char}
            </motion.span>
          ))}
        </span>
      </>
    );
  };

  if (!phrases || phrases.length === 0) return null;

  return (
    <span className={`inline-flex items-center ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onAnimationComplete={(definition) => {
            // Only trigger the next phrase when the 'visible' (typing) animation completes.
            // This prevents the 'exit' animation from double-triggering the timeout.
            if (definition === "visible") {
              setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % phrases.length);
              }, pauseDuration);
            }
          }}
          className="inline-block"
        >
          {renderPhrase(phrases[currentIndex])}
        </motion.span>
      </AnimatePresence>
      {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
          className="inline-block w-[3px] h-[0.9em] bg-primary ml-1 align-middle"
        />
      )}
    </span>
  );
};

export default TypingAnimation;