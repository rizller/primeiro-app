

/**
 * Hooks são recursos do React que tem diversas funções, como aguardar e alterar
 * o estado de algum dado na aplicação, por exemplo.
 * 
 * Todos os hooks começam com use, por exemplo, useState.(useState guarda e manipula estado)
 * 
 * Podemos criar os nossos hooks, isso é chamado custom hook. Hooks precisam ser importados;
 * 
 * Geralmente são úteis em todas as aplicações.
 */

function Mensagem({ nome, idade }){
    return(
      <span>Bem Vindo {nome}! Você tem {idade} anos!</span>
    );
  }

  export default Mensagem;


// function Mensagem(props){
//     return(
//       <span>Bem Vindo {props.nome}!</span>
//     );
//   }

//   export default Mensagem;