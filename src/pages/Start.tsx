import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

  return <CountDown setStart={setStart} />;
};

export default Start;
