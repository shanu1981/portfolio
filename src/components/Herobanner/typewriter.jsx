import { useEffect, useState } from "react";

const Typewriter = ({
  text,
  speed = 120,
  deleteSpeed = 80,
  delay = 1500,
}) => {
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (!isDeleting && index < text.length) {
      timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
    } 
    else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayed(text.substring(0, index - 1));
        setIndex(index - 1);
      }, deleteSpeed);
    } 
    else if (index === text.length) {
      timeout = setTimeout(() => setIsDeleting(true), delay);
    } 
    else if (index === 0 && isDeleting) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, speed, deleteSpeed, delay]);

  return (
    <span className="relative">
      {displayed}
      <span className="ml-[2px] animate-blink text-[#dc143c]">|</span>
    </span>
  );
};

export default Typewriter;
