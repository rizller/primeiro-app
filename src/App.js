import Mensagem from './components/Mensagem'

import {useState} from 'react';

function App(){

  //parâmetros - nome do estado e nome da função que vai trocar o valor desse estado
  const [nome, setNome] = useState('José Amaral');

  //jsx (javascript xml)
  return(
    <div>
      <h1>Componente APP</h1>
      <br/>
      <h2>Olá: {nome} </h2>
      <button>
          Mudar Nome
      </button>
      <Mensagem nome="Rizller" idade={34} />  
    </div>
   
  );
}
//export para outors arquivos conseguirem usar esse componente
export default App;

