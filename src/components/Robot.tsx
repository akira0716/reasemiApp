import { useEffect, useState, useRef } from "react";
import { getNumbers } from "../utils/random";

const Robot = ({
  animate,
  level,
  flg,
  onClick,
  onAnimationEnd,
}: {
  animate: boolean;
  level: number;
  flg: boolean;
  onClick: (e: React.MouseEvent<HTMLImageElement>) => void;
  onAnimationEnd: React.AnimationEventHandler<HTMLImageElement>;
}) => {
  const [top, setTop] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);
  const [rotate, setRotate] = useState<number>(0);
  const [style, setStyle] = useState<Object>({});

  const imgRef = useRef<HTMLImageElement>(null);

  const imgSthle = {
    animation: animate ? "animation2 2s ease-in-out" : "none",
  };

  useEffect(() => {
    const ref = document.getElementById("game-display");
    if (ref) {
      const rect = ref.getBoundingClientRect();
      setTop(getNumbers(1, 100, rect.height - 250)[0]);
      setLeft(getNumbers(1, 100, rect.width - 250)[0]);
      setRotate(getNumbers(1, 0, 360)[0]);
    }
  }, [flg]);

  useEffect(() => {
    const robotStyle = {
      top: `${top}px`,
      left: `${left}px`,
      transform: `rotate(${rotate}deg)`,
    };

    setStyle(robotStyle);
  }, [top, left, rotate]);

  return (
    <div className="robot-area" style={style}>
      <img
        style={imgSthle}
        ref={imgRef}
        className="robot"
        src="/photo-output.png"
        alt=""
        onClick={onClick}
        onAnimationEnd={onAnimationEnd}
      />
      <div className="hole"></div>
    </div>
  );
};

export default Robot;
