import axios from 'axios';
import { Estudiante } from '../interfaces/estudiante';

class Api {

    url = "http://localhost:4000/"
   
    public getEstudiantes() {
        return axios.get(this.url + 'estudiantes');
    }

    public addEstudiante(estudiante:Estudiante) {
        return axios.post(this.url + 'estudiantes', estudiante);
    }

    public deleteEstudiante(id:number){
        return axios.delete(this.url + `estudiantes/${id}`)
    }

}

export default Api;