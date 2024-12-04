import "./App.css";
import io from "socket.io-client";

const socket = io("http://localhost:3005");

function App() {
  return (
    <div className="container">
      <input placeholder="Message" />
      <button>Send message</button>
    </div>
  );
}

export default App;
