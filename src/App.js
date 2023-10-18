import { useLayoutEffect, useRef, useState } from "react";
import "./App.css";

import { Previewer } from "./features/previewer/Previewer";
import { Input } from "./features/input/Input";

function App() {
  const ref = useRef(null);

  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    setHeight(ref.current.offsetHeight);
  }, []);

  return (
    <main className="App row p-4 vh-100">
      <section className="h-100 row" ref={ref}>
        <div className="col">
          <Input style={{ maxHeight: height }} />
        </div>
        <div className="col">
          <Previewer style={{ maxHeight: height }} />
        </div>
      </section>
    </main>
  );
}

export default App;
