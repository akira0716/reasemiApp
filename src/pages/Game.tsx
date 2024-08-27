import { useState, useEffect } from "react";
import { getNumbers } from "../utils/random";
import { useNavigate } from "react-router-dom";
import Life from "../components/Life";

const Game = ({
  count,
  setCount,
}: {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [randomNumber, setRandomNumber] = useState<number>(0);
  const [flg, setFlg] = useState<boolean>(false);
  const [life, setLife] = useState(3);

  const navigate = useNavigate();

  useEffect((): void => {
    if (life != 0) {
      const number: number = getNumbers(1, 0, 24)[0];
      setRandomNumber(number);
    }
  }, [flg]);

  useEffect(() => {
    if (life == 0) {
      setInterval(() => {
        // navigate("/result");
      }, 1000);
    }
  }, [life]);

  const clickEvent = (e: React.MouseEvent<HTMLImageElement>): void => {
    const target = e.target as HTMLElement;
    console.log(target);

    if (target.id === "robo") {
      setCount(count + 1);
      setFlg(!flg);
    }
  };

  const onAnimationEnd = (): void => {
    setLife(life - 1);
    setFlg(!flg);
  };

  return (
    <div className="game-display">
      <Life life={life} />
      <div className="wrapper">
        {[...Array(25)].map((_, index): JSX.Element => {
          if (index == randomNumber) {
            return (
              <div key={index} className="box">
                <div className="border-radius"></div>
                <img
                  id="robo"
                  src="/photo-output.png"
                  className="item animation"
                  onClick={clickEvent}
                  onAnimationEnd={onAnimationEnd}
                />
              </div>
            );
          }

          return (
            <div key={index} className="box">
              <img
                src="/photo-output.png"
                className="item"
                onClick={clickEvent}
                onAnimationEnd={onAnimationEnd}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Game;
