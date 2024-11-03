import React from "react";
import "./App.css";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="flex items-center justify-center bg-sky-950 min-h-screen">
      <Weather />
    </div>
  );
}

export default App;
