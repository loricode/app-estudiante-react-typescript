import { Estudiante } from '../../interfaces/estudiante';

interface Props {
    data: Estudiante[]
}

const Tabla = ({ data }: Props) => {

    return (
        <table className="table table-hover table-dark">
            <thead >
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Edad</th>
                    <th scope="col">Telefono</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((item)=>(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nombre}</td>
                        <td>{item.edad}</td>
                        <td>{item.telefono}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

}

export default Tabla;