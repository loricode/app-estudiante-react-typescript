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

    public getEstudiante(id:number){
        return axios.get(this.url + `estudiantes/${id}`)
    }

    public updateEstudiante(estudiante:Estudiante){
        return axios.put(this.url + `estudiantes`, estudiante)
    }

}

export default Api;