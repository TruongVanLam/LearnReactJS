import { useState } from 'react'
import Content from './useEffectWithFakeChatApp';

function App() {

  const [mounted, setMounted] = useState(false)
  return (
    <div className="App">
      <button onClick={() => setMounted(!mounted)}>Toggle</button>
      <div>{mounted && <Content></Content>}</div>
    </div>
  );
}

export default App;
