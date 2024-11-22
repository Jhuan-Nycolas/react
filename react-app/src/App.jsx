import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api")
      .then((response) => setMessage(response.data.message))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div>
      <p>Mensagem do servidor: {message}</p>
    
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
      </button>
      </div>
      
      </div>
    </>
  );
}

export default App;
