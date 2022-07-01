import React from "react";
import dayjs from "dayjs";
import Grid from "./components/Grid";
import "./styles/App.css";

const App = () => {
  return (
    <div className="app">
      <Grid timeToComplete={dayjs().add(1, "minute")} />
    </div>
  );
};

export default App;
