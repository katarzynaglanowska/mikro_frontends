import React from "react";
import useStore from "shell/hooks/useStore";
import { useStoreSelector } from "shell/hooks/useStoreSelector";

const Button = React.lazy(() => import("UILibrary/Button"));

function App() {
  const { decrementCounter, incrementCounter } = useStore();
  const {
    counter: { value },
    user: { name },
  } = useStoreSelector((state) => state);

  return (
    <div className="App">
      <div>Test service!!!</div>
      {/* <Button onClick={() => console.log("Button clicked - test service")}>
        UI test
      </Button> */}
      <div>USER {name}</div>
      <div>
        <label className="text-black">Counter - global store</label>
        <p>Counter value : {value}</p>
        <section className="flex flex-row gap-x-4">
          <Button onClick={decrementCounter}> Decrement</Button>
          <Button onClick={incrementCounter}> Increment</Button>
        </section>
      </div>
    </div>
  );
}

export default App;
