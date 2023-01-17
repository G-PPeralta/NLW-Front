import { Fragment } from "react";
import { Habit } from "./components/Habit";

function App() {
  return (
    <Fragment>
      <Habit completed={3} />
    </Fragment>
  );
}

export default App;
