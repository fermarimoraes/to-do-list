import React, {useState} from 'react';
import { IoMdCloseCircle } from "react-icons/io";
import "./App.css";







function App() {

    const [valorInput, setValorInput] = useState("")

    const [ toDo, setToDo] = useState([])

    function pegarInput(e){
      let valor = e.target.value
      setValorInput(valor)
      console.log(valor)
    }

    function adicionarTarefa() {
      setToDo([...toDo, valorInput])

      setValorInput("");
    }

    function deletarTarefa(indexRemover) {
      let novo = toDo.filter((item, index)=>{
          return index !== indexRemover
      })

      setToDo(novo)
    }
   
  return (
    <div className="to-do">
      <h1>TO DO</h1>
      <div className="body">
        <input value={valorInput} type="text" id="tarefa" onChange={pegarInput} placeholder="Digite à Tarefa"/>
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div> 
      
      <ol className="lista">
        {toDo.map((item, index) => {
          return (            
            <li className="itens" key={index}>
              {item}
              <button className="button-deletar" onClick={() => deletarTarefa(index)}>
              <IoMdCloseCircle/>
              </button>
            </li>
          )})
        }          
      </ol>
      

    </div>
  );
}

export default App;
