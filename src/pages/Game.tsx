import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Life from "../components/Life";
import Robot from "../components/Robot";

const Game = ({
  level,
  count,
  setCount,
}: {
  level: number;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [flg, setFlg] = useState<boolean>(false);
  const [life, setLife] = useState(3);
  const [animate, setAnimate] = useState<boolean>(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (life == 0) {
      setInterval(() => {
        // navigate("/result");
      }, 1000);
    }
  }, [life]);

  const clickEvent = (e: React.MouseEvent<HTMLImageElement>): void => {
    setCount(count + 1);
    setFlg(!flg);
  };

  const onAnimationEnd = (): void => {
    setLife(life - 1);
    setFlg(!flg);
    setAnimate(false);
    setTimeout(() => {
      setAnimate(true); // アニメーションを再度有効化
    }, 0);
  };

  return (
    <div id="game-display" className="game-display">
      <Life life={life} />
      <Robot
        animate={animate}
        level={level}
        flg={flg}
        onClick={clickEvent}
        onAnimationEnd={onAnimationEnd}
      />
    </div>
  );
};

export default Game;
