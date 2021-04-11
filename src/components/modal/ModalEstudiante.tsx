

interface Props{
    modalId:string;
}

const ModalEstudiante = ({modalId}:Props) => {

    return (
        <div>
            <div className="modal fade p-2"
               id={modalId}
               aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title"
                      >Estudiante</h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                       aria-label="Close"></button>
                    </div>
                        <div className="m-2">
                        <input
                            placeholder="Nombre"
                            type="text"
                            name=""
                            className="form-control"
                          />
                          </div>
                          <div className="m-2">
                        <input
                            placeholder="Edad"
                            type="number"
                            name=""
                            className="form-control"
                          />
                          </div>
                          <div className="m-2">
                        <input
                            placeholder="Telefono"
                            type="number"
                            name=""
                            className="form-control"
                          />
                          </div>
                        <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-danger"
                              data-bs-dismiss="modal">
                                Cancelar</button>
                            <button
                             type="button"
                             className="btn btn-success">
                                 Guardar
                             </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ModalEstudiante;