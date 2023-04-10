import "./styles.css";
import { useState } from "react";
import { person } from "./Person";
export default function App() {
  const [datas, setDatas] = useState(person);
  const [addDatas, setAddDatas] = useState("");

  const handleAdd = () => {
    const addArr = [...datas];
    addArr.push({ id: datas.length + 1, name: addDatas });
    setDatas(addArr);
    setAddDatas("");
  };

  const handleDelete = (id) => {
    const arr = [...datas];
    arr.splice(id, 1);
    console.log(arr);
    setDatas(arr);
  };
  return (
    <div className="App">
      <input onChange={(e) => setAddDatas(e.target.value)} value={addDatas} />
      <button onClick={handleAdd}>Add</button>
      {datas.map((e, index) => (
        <div key={e.id}>
          <span>{e.id}</span>
          <span>{e.name}</span>
          <button>Edit</button>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
