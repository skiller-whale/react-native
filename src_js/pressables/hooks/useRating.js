import { useRef, useState } from "react";

const useRating = (min, max) => {
  const [rating, setRating] = useState((max - min) / 2);
  const intervalIdRef = useRef(null);

  const increment = () => {
    setRating((rating) => (rating < 100 ? rating + 1 : rating));
  };

  const decrement = () => {
    setRating((rating) => (rating > 0 ? rating - 1 : rating));
  };

  const start = (modifier, interval) => {
    stop();
    intervalIdRef.current = setInterval(modifier, interval);
    modifier();
  };

  const stop = () => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
    }
  };

  return [rating, increment, decrement, start, stop];
};

export default useRating;
