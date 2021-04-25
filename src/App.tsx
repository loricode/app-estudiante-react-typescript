import {useEffect, useState} from 'react';
import Api from './http'
import ModalEstudiante from './components/modal/ModalEstudiante';
import Tabla from './components/table/Tabla';
import {Estudiante} from './interfaces/estudiante';

interface State {
  estudiante:Estudiante | null
  listEstudiante:Estudiante[],
  action:null
}

function App() {
  
  const [state, setState] = useState<State>({
    estudiante:null,
    listEstudiante:[],
    action:null
  })

  useEffect(()=>{ 
    getEstudiantes()
  },[]);

  async function getEstudiantes(){
    const api = new Api()
    const response = (await api.getEstudiantes()).data
    setState({estudiante:null,listEstudiante:response, action:null})  
  }

  return (
    <div className="container p-4">
       <button 
           data-bs-toggle="modal"
           data-bs-target="#modalEstudiante"
           className="btn btn-info mb-1 text-white"
           onClick={()=>setState({
               estudiante:state.estudiante,
               listEstudiante:state.listEstudiante,
               action:null
              })
             }
           >
          Agregar
        </button>
       <Tabla
        data={state.listEstudiante}
        reload={getEstudiantes}
        setState={setState}
        state={state}
        />

       <ModalEstudiante
        modalId="modalEstudiante"
        reload={getEstudiantes}
        data={state.estudiante as Estudiante}
        action={state.action}
       />
    </div>
  );
}

export default App;
