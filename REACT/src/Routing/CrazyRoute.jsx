import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation1 from "./Navigation1";
import Navigation2 from "./Navigation2";

function CrazyRoute() {
  const [countdown, setCountdown] = useState(20);
  const navigate = useNavigate();

  useEffect(() => {
    if (countdown === 0) {
      navigate("/");
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Are you crazy?</h1>

      <h2 style={{ color: "red" }}>
        Redirecting in {countdown} seconds...
      </h2>

      <Navigation1 />
      <Navigation2 />
    </div>
  );
}

export default CrazyRoute;

