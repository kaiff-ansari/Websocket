import { useState, useEffect, useRef } from 'react';

const App = () => {

  const [socket, setSocket] = useState<WebSocket | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function sendMessage() {

    if (!socket){
      return;
    }
    
    const message = inputRef.current?.value;

    if (!message){
      return;
    }
  
    socket.send(message);

  }

  useEffect(() => {

    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    ws.onmessage = (ev) => {

      alert(ev.data);
    }


  }, [])



  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>

      <input ref={inputRef} type="text" placeholder="Message..." />
      <button style={{ marginTop: "10px" }} onClick={sendMessage}>Send</button>

    </div>
  )
}

export default App