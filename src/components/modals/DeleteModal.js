function DeleteModal(props) {
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
                  <div className="modal-icon mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                  </div>
                  <div className="modal-content text-center mt-3 sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg font-medium text-gray-900">
                      Eliminar
                    </h3>
                    <div className="modal-text mt-2 ">
                      <p className="text-gray-500 text-sm">
                        ¿Seguro que quieres eliminar la tarea {props.task.name}?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-actions bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={props.changeState}
                  className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-md mb-2 px-4 py-2 bg-white font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:right-2 focus:ring-offset-2 focus:ring-blue-100 sm:my-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancelar
                </button>
                <button
                  onClick={props.deleteTasks}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-md px-4 py-2 bg-red-700 font-medium text-white hover:bg-red-600 focus:outline-none focus:right-2 focus:ring-offset-2 focus:ring-red-100 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DeleteModal;
