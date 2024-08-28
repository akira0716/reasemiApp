import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/CountDown.css";

import CountDown from "../components/CountDown";

const Start = ({
  setLevel,
}: {
  setLevel: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [start, setStart] = useState<Boolean>(false);
  const [levelContext, setLevelContext] = useState<string>("イージー");

  const navigate = useNavigate();

  useEffect(() => {
    if (start) {
      // 画面遷移
      navigate("/game");
    }
  }, [start]);

  return (
    <>
      <div className="wanted">
        <div className="Main"></div>
      </div>
      <div>
        <p className="select">モード選択</p>
        <div className="mode-select-buttons">
          <button
            className="level-select-btn easy"
            onClick={() => {
              setLevel(0);
              setLevelContext("イージー");
            }}
          >
            イージー
          </button>
          <button
            className="level-select-btn normal"
            onClick={() => {
              setLevel(1);
              setLevelContext("ノーマル");
            }}
          >
            ノーマル
          </button>
          <button
            className="level-select-btn hard"
            onClick={() => {
              setLevel(2);
              setLevelContext("ハード");
            }}
          >
            ハード
          </button>
        </div>
      </div>
      <div>
        <p className="level-text">
          難易度<span className="level">{levelContext}</span>に挑戦する！！！
        </p>
      </div>
      <CountDown setStart={setStart} />
    </>
  );
};

export default Start;
