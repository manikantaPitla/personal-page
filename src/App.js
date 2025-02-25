import "./App.css";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Home />
      <Toaster
        toastOptions={{
          style: {
            fontSize: "12px",
            fontWeight: 500,
          },
        }}
      />
    </div>
  );
}

export default App;
