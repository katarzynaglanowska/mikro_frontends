import React from "react";
import useStore from "./hooks/useStore";
import { useStoreSelector } from "./hooks/useStoreSelector";

const LocalFallbackComponent = () => {
  return <div>Loading...</div>;
};

const Button = React.lazy(() => import("UILibrary/Button"));
const Input = React.lazy(() => import("UILibrary/Input"));

let TestService: any;
try {
  TestService = React.lazy(() => import("testMF/App"));
} catch (error) {
  console.error("Cannot load remote resourse:", error);
  TestService = LocalFallbackComponent;
}

function App() {
  const { decrementCounter, incrementCounter, setUserName } = useStore();
  const {
    counter: { value },
    user: { name },
  } = useStoreSelector((state) => state);

  return (
    <div className="App">
      <div>Shell app</div>
      <div>
        <p>User</p>
        <Input value={name} label="User" name="user" onChange={(e)=> setUserName(e.target.value)}></Input>
      </div>
      <p>Counter value : {value}</p>
      <section className="flex flex-row gap-x-4">
        <Button onClick={decrementCounter}> Decrement</Button>
        <Button onClick={incrementCounter}> Increment</Button>
      </section>
      <hr />
      <React.Suspense fallback="{<LocalFallbackComponent />}">
        <TestService />
      </React.Suspense>
      <hr />
      <React.Suspense fallback="{<LocalFallbackComponent />}">
        <Button>UI Library Button</Button>
      </React.Suspense>
    </div>
  );
}

export default App;
