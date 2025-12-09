import "./App.css";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";
import { TOAST_OPTIONS } from "./constants";

const App = () => {
  return (
    <div className="App">
      <Home />
      <Toaster toastOptions={TOAST_OPTIONS} />
    </div>
  );
};

export default App;
