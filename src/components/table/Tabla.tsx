import Api from '../../http';
import { Estudiante } from '../../interfaces/estudiante';

interface Props {
    data: Estudiante[]
    reload?:any
}

const Tabla = ({ data, reload }: Props) => {

async function deleteEstudiante(id:number | undefined){
  if(id !== undefined){
    if(window.confirm("¿seguro que quieres eliminarlo?")){
        const api = new Api();
        const response = (await api.deleteEstudiante(id)).data;
        console.log(response); 
        reload()
    }    
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
                {data?.map((item)=>(
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
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Tabla;