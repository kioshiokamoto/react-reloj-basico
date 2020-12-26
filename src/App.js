import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [reloj, setReloj] = useState({
    tiempo: new Date().toLocaleTimeString(),
  });

  const updateClock = () => {
    setReloj({
      tiempo: new Date().toLocaleTimeString(),
    });
  };

  const intervalo = () => {
    setInterval(() => {
      updateClock();
    }, 1000);
  };
  useEffect(() => {
    intervalo();
    return () => {
      clearInterval(intervalo());
    };
  }, [reloj]);

  return (
    <div className="app">
      <div className="reloj">
        <p className="tiempo">{reloj.tiempo}</p>
      </div>
    </div>
  );
}

export default App;
