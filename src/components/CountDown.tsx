import { useState, useEffect } from "react";

const CountDown = ({
  setStart,
}: {
  setStart: React.Dispatch<React.SetStateAction<Boolean>>;
}) => {
  const [time, setTime] = useState<number>(3);
  const [countStart, setCountStart] = useState<Boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      if (time > 0 && countStart) {
        setTime(time - 1);
      }
    }, 1000);
  }, [time, countStart]);

  const onClick_Start = () => {
    setCountStart(true);
  };

  const onAnimationEnd = () => {
    setStart(true);
  };

  if (!countStart) {
    return (
      <div>
        <button onClick={onClick_Start}>開始</button>
      </div>
    );
  }

  if (time <= 0) {
    return (
      <div className="message fadeOutAnimation" onAnimationEnd={onAnimationEnd}>
        Game Start!!!
      </div>
    );
  }

  return <p className="message">{time}</p>;
};

export default CountDown;
