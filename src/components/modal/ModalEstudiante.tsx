import React, { useEffect, useState } from 'react';
import Api from '../../http';
import { Estudiante } from '../../interfaces/estudiante';

interface Props {
  modalId: string;
  reload?: any
  data: Estudiante | null,
  action: null
}

const ModalEstudiante = ({ modalId, reload, data, action }: Props) => {

  const [estudiante, setEstudiante] = useState<Estudiante>({
    id: 0,
    nombre: '',
    edad: '',
    telefono: '',
  })

  useEffect(() => {
    if (data) {
      if (action === 'edit') {
        setEstudiante({
          id: data?.id,
          nombre: data?.nombre,
          edad: data?.edad,
          telefono: data?.telefono
        });
      } else clearInputs()
    }
  }, [data, action])

  function handleChangeInput(name: string, e: React.ChangeEvent<HTMLInputElement>) {
    setEstudiante({
      ...estudiante,
      [name]: e.target.value
    })
  }

  async function handleSubmitSave() {
    const api = new Api()
    let response: any;
    if (action === 'edit') {
      response = (await api.updateEstudiante(estudiante)).data
      console.log(response)
    } else {
      response = (await api.addEstudiante(estudiante)).data
      console.log(response)
    }
    clearInputs()
    reload()
  }

  function clearInputs() {
    setEstudiante({
      id: 0,
      nombre: '',
      edad: '',
      telefono: '',
    })
  }

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
                className="form-control"
                placeholder="Nombre"
                type="text"
                name="nombre"
                onChange={(e) => handleChangeInput('nombre', e)}
                value={estudiante?.nombre}
              />
            </div>
            <div className="m-2">
              <input
                className="form-control"
                placeholder="Edad"
                type="number"
                name="edad"
                onChange={(e) => handleChangeInput('edad', e)}
                value={estudiante?.edad}
              />
            </div>
            <div className="m-2">
              <input
                className="form-control"
                placeholder="Telefono"
                type="number"
                name="telefono"
                onChange={(e) => handleChangeInput('telefono', e)}
                value={estudiante?.telefono}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal">
                Cancelar
               </button>
              <button
                type="button"
                onClick={handleSubmitSave}
                className="btn btn-success">
               {action === 'edit' ? "Editar":"Guardar"} 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default ModalEstudiante;