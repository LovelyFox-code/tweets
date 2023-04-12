import { useEffect } from "react";
import "./App.css";
import { getRequest } from "./data";

function App() {
  useEffect(() => {
    const data = getRequest();
    console.log(data);
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
