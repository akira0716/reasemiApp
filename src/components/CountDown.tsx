import { useState, useEffect } from "react";
import "../css/CountDown.css";

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
      <>
        <div className="start">
          <p className="start2" onClick={onClick_Start}>
            討伐
          </p>
        </div>
      </>
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
