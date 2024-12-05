import "./App.css";
import io from "socket.io-client";
import Main from "./components/Main/Main";

const socket = io("http://localhost:3005");

function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
