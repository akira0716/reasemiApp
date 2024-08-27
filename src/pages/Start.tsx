import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/CountDown.css";

import CountDown from "../components/CountDown";

const Start = () => {
  const [start, setStart] = useState<Boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (start) {
      // 画面遷移
      navigate("/game");
    }
  }, [start]);

  return (
    <>
      <div className="Main">
        <CountDown setStart={setStart} />
      </div>
    </>
  );
};

export default Start;
