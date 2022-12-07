import React, { useState } from "react";
import Button from "./Button";

function FormTask({ addItem }) {
  // pensar de que forma puedo ordenar los distintos componentes para que me devuelvan el target del form y con eso crearun nuevo componente Task
  const [keyword, setKeyword] = useState("");
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(keyword);
    console.log(keyword);
  };
  return (
    <form onSubmit={handleSubmit} id="formulario">
      <input
        onChange={handleChange}
        value={keyword}
        type="text"
        className="rounded-lg bg-slate-300 px-2"
        placeholder="Agregar Tarea..."
      ></input>
      <button
        type="submit"
        id="buttonTask"
        className="bg-cyan-500 hover:bg-cyan-600 rounded-full"
      >
        +
      </button>
      <Button>ordenar</Button>
    </form>
  );
}
export default FormTask;
