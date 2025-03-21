"use client";

import { useState, useEffect } from "react";

type TerminalTextProps = {
  value: string;
  typingDelay?: number;
  startDelay?: number;
};

export function TerminalText({
  value,
  typingDelay = 100,
  startDelay = 1000,
}: TerminalTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    const text = value || ""; // Ensure we have a string even if value is undefined

    const timer = setTimeout(() => {
      setIsTyping(true);
      let currentIndex = 0;

      const typeText = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typeText);
          setIsTyping(false);
        }
      }, typingDelay);

      return () => {
        clearInterval(typeText);
        setIsTyping(false);
      };
    }, startDelay);

    return () => {
      clearTimeout(timer);
      setIsTyping(false);
    };
  }, [value, typingDelay, startDelay]);

  return (
    <p className="font-mono text-yellow flex items-center gap-2">
      <span>{`>>> ${displayedText}`}</span>
      <span
        className={`inline-block w-2.5 h-5 bg-yellow ${
          isTyping ? "opacity-100" : "animate-[blink_1s_steps(2)_infinite]"
        }`}
      />
    </p>
  );
}
