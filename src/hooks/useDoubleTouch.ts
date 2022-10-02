import {useState} from 'react';

const useDoubleTouch = () => {
  const [lastPress, setLastPress] = useState(0);

  const isDoubleTouch = (delay: number = 400): boolean => {
    const time = new Date().getTime();
    const delta = time - lastPress;

    const DOUBLE_PRESS_DELAY = delay;
    if (delta < DOUBLE_PRESS_DELAY) {
      return true;
    }
    setLastPress(time);
    return false;
  };

  return {
    isDoubleTouch,
  };
};

export default useDoubleTouch;
