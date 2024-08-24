import { useEffect, useState, useRef } from "react";
import { getNumbers } from "../utils/random";

const Result = ({ count }: { count: number }) => {
  const [moles, setMoles] = useState(count);

  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (moles < 2) {
      return;
    }

    setTimeout(() => {
      if (resultRef && resultRef.current) {
        const rect = resultRef.current.getBoundingClientRect();

        const top = getNumbers(1, 100, rect.height - 100)[0];
        const left = getNumbers(1, 100, rect.width - 100)[0];

        const resultElement = document.createElement("img");
        resultElement.setAttribute("src", "/モグラ.png");
        resultElement.setAttribute(
          "style",
          `position: absolute; top: ${top}px; left: ${left}px; width: 100px; height: 100px`
        );
        resultElement.setAttribute("key", `${moles}`);

        resultRef.current.appendChild(resultElement);

        setMoles(moles - 1);
      }
    }, 1000);
  }, [moles]);

  return (
    <div>
      <div className="count-display">
        あなたが倒したモグラは、{count}匹です。
      </div>
      <div className="result-image" ref={resultRef}></div>
    </div>
  );
};

export default Result;
