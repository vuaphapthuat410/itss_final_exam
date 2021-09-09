import './App.css';
import useStorage from './hooks/storage';
import { useState } from 'react';

function App() {
  const { data, arr, deleteName } = useStorage({
    input: ["Huyen", "Hoa", "Hung", "Long"]
  })
  const [name, setName] = useState("");
  return (
    <div className="App">
      <div>学生一覧　: [{data.join(', ')}]</div>
      <br></br>

      <div>削除する名前を入力してください。<br></br><br></br>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
        <br></br><br></br>
        <button type="button" onClick={() => deleteName(name)}>確定</button>
        <br></br>
      </div>
      <br></br>
      <div>
        <div>削除する名前: {name}</div>
        <div>新しい一覧: [{arr.join(', ')}]</div>
      </div>
      
    </div>
  );
}

export default App;
