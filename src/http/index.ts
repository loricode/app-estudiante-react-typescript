import axios from 'axios';

class Api {

    url = "http://localhost:4000/"
   
    public getEstudiantes() {
        return axios.get(this.url + 'estudiantes');
    }

}

export default Api;