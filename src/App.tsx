import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Start from "./pages/Start.tsx";
import Game from "./pages/Game.tsx";
import Result from "./pages/Result.tsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [level, setLevel] = useState<number>(0);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Start setLevel={setLevel} />,
    },
    {
      path: "/game",
      element: <Game level={level} count={count} setCount={setCount} />,
    },
    {
      path: "/result",
      element: <Result count={count} />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
