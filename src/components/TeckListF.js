import React, { useState } from "react";

export default function TechListF() {
  const [list, setList] = useState(["NodeJS", "ReactJS", "React Native"]);

  const [newTech, setNewTech] = useState("");

  function handleChange(e) {
    setNewTech(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (list.indexOf(newTech) < 0 && newTech !== "") {
      setList([...list, newTech]);
      setNewTech("");
    }
  }

  function handleRemove(tech) {
    setList(list.filter(t => t !== tech));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Componente funcional</h3>
      <ul>
        {list.map(tech => (
          <li key={tech}>
            {tech}
            <button type="button" onClick={() => handleRemove(tech)}>
              Remover
            </button>
          </li>
        ))}
        <input type="text" onChange={handleChange} value={newTech} />
        <button type="submit">Dale!</button>
      </ul>
    </form>
  );
}
