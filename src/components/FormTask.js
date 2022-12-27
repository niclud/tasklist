import React, { useState } from "react";
import Button from "./Button";

function FormTask(props) {
  const [keyword, setKeyword] = useState("");
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addItem(keyword);
    console.log(keyword);
  };
  return (
    <form onSubmit={handleSubmit} id="formulario">
      <input
        onChange={handleChange}
        value={keyword}
        type="text"
        className="rounded-lg bg-slate-300 px-2 w-[155px] md:w-auto"
        placeholder="Agregar Tarea..."
      ></input>
      <button
        type="submit"
        id="buttonTask"
        className="bg-cyan-500 hover:bg-cyan-600 rounded-full w-7 h-7"
      >
        <i className="fa-regular fa-plus text-black"></i>
      </button>

      <Button
        type="button"
        funcion={props.sortTasks}
        className="w-7 h-7 fa-solid fa-arrow-up-wide-short"
      ></Button>
    </form>
  );
}
export default FormTask;
