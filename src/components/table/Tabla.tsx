import Api from '../../http';
import { Estudiante } from '../../interfaces/estudiante';

interface Props {
    data: Estudiante[]
    reload?: any
    setState:any,
    state:any
}

const Tabla = ({ data, reload, setState, state }: Props) => {

    async function deleteEstudiante(id: number | undefined) {
        if (id !== undefined) {
            if (window.confirm("¿seguro que quieres eliminarlo?")) {
                const api = new Api();
                const response = (await api.deleteEstudiante(id)).data;
                console.log(response);
                reload()
            }
        }
    }

    async function getEstudiante(id: number | undefined) {
        if (id !== undefined) {
            const api = new Api();
            const response = (await api.getEstudiante(id)).data;
            console.log(response['results']);
            setState({
                ...state,
                action:'edit',
                estudiante:{
                id:response['results'][0].id,
                nombre:response['results'][0].nombre,
                edad:response['results'][0].edad,
                telefono:response['results'][0].telefono
             }       
            });
        }
    }

    return (
        <table className="table table-hover table-dark">
            <thead >
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Edad</th>
                    <th scope="col">Telefono</th>
                    <th scope="col">Opciones</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nombre}</td>
                        <td>{item.edad}</td>
                        <td>{item.telefono}</td>
                        <td>
                            <button className="btn btn-danger"
                                onClick={() => deleteEstudiante(item?.id)}>
                                Delete
                          </button>

                            <button className="btn btn-secondary mx-1"
                                data-bs-toggle="modal"
                                data-bs-target="#modalEstudiante"
                                onClick={() => getEstudiante(item?.id)}>
                                Update
                          </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Tabla;