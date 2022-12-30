import { useState } from "react";

function InfoModal(props) {
  const [keyword, setKeyword] = useState("");
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  const handleSubmit = () => {
    props.task.description = keyword;
    setKeyword("");
    props.changeState();
    console.log(props.task.description);
  };

  return (
    <>
      {props.state && (
        <div id="modal-component-container" className="fixed inset-0">
          <div className="modal-flex-container flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="modal-bg-container fixed inset-0 bg-gray-700 bg-opacity-75"></div>
            <div className="modal-space-container hidden sm:inline-block sm:align-middle sm:h-screen"></div>
            <div className="modal-container inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
              <div className="modal-wrapper bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="modal-wrapper-flex sm:flex sm:items-start">
                  <div className="modal-content w-full text-center mt-3 sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg font-medium text-gray-900">
                      Información de la tarea {props.task.name}
                    </h3>
                    <div className="modal-text mt-2 w-full">
                      <label className="text-gray-500 text-sm grid grid-flow-row">
                        Descripción
                        <textarea
                          onChange={handleChange}
                          value={keyword}
                          placeholder="Agregar la descripcion de la tarea..."
                          type="text"
                          className="rounded-lg bg-slate-300 w-full h-20 p-1"
                        >
                          {props.task.description}
                        </textarea>
                      </label>
                      <label className="text-gray-500 text-sm text-left grid grid-flow-row">
                        Fecha de vencimiento
                        <input
                          type="date"
                          className="rounded-lg bg-slate-300 w-1/2 p-1"
                        ></input>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-actions bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-md px-4 py-2 bg-green-700 font-medium text-white hover:bg-green-600 focus:outline-none focus:right-2 focus:ring-offset-2 focus:ring-red-100 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Guardar
                </button>
                <button
                  onClick={props.changeState}
                  className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-md mt-2 px-4 py-2 bg-white font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:right-2 focus:ring-offset-2 focus:ring-blue-100 sm:my-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default InfoModal;
