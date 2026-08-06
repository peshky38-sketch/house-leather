import { useEffect, useRef, useState } from "react";

function Startandstop() {
 const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial", textAlign: "center" }}>
      <h2>Page Timer</h2>
      <p style={{ fontSize: "2rem", margin: "1rem 0" }}>{seconds} seconds</p>
      <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center" }}>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default Startandstop;
