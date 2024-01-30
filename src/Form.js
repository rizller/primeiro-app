import {useState } from "react";

function Form(){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [idade, setIdade] = useState("");
    const [user, setUser] = useState({}); //useState objeto começando ele como objeto vazio
    const [tarefa, setTarefa] =useState("");
    const [tarefas, setTarefas] = useState([]);


    function handleRegistrer(e){
        e.preventDefault(); //previne o comportamento padrão do navegador de carregar a página após o submit
        setUser({
            nome: nome,
            idade: idade,
            email: email,
        })

        alert("Usuário Registrado com Sucesso")
    }

    function handleRegistrerTask(e){
        e.preventDefault();
        if(tarefa.trim() === ""){
            alert("Favor digitar algum conteúdo para a tarefa!")
        }else{
            setTarefas([...tarefas, tarefa]);
            setTarefa("");
        }

    }
    return(
        <div>
            <form onSubmit={handleRegistrer}>
                <h1>Cadastrando Usuário</h1>
                <label>Nome:</label><br/>
                <input placeholder="Digite o seu nome"
                       value={nome}
                       onChange={(e) => setNome(e.target.value)} 
                 /><br/>
                <label>E-mail:</label><br/>
                <input placeholder="Digite o seu e-mail"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}        
                /><br/>
                <label>Idade:</label><br/>
                <input placeholder="Digite a sua idade"
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}     
                /><br/>
                <button type="submit">Registrar Usuário</button>
            </form>
            <br/><br/>

            <div>
                <span>Bem-Vindo: {user.nome} </span><br/>
                <span>Idade: {user.idade} </span><br/>
                <span>E-mail: {user.email} </span><br/>
                <br/>
                <input placeholder="Adicione a sua tarefa"
                    value={tarefa}
                    onChange={(e) => setTarefa(e.target.value)}     
                /><br/>
                <button onClick={handleRegistrerTask}>Registrar Tarefa</button>
                <button onClick={() => setTarefas([])}>Limpar Tarefas</button>
                <br/>
                <ul>
                    {tarefas.map(tarefa => (
                        <li key={tarefa}>{tarefa}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Form;