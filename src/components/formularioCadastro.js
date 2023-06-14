import Image from 'next/image';
import style from '../style/FormularioCadastro.module.css';

function Apresentacao() {
  return (
    <div id="apresentacao_tela">
      <Image src="/Tela3/logoPreta.png" alt="logotipo do MatchInk. Dois prismas posicionados na direita e esquerda, voltados para o oposto, no centro, entre eles, há algo semelhante a uma 'varinha'" width="115" height="122" />
      <div id="texto">
        <h2>
          Cadastre-se
        </h2>

        <span>
          Desfrute dos benefícios do MatchInk
        </span>
      </div>
    </div>
  );
}

function Formulario() {
  return (
    <div id="campo_inputs" onSubmit={handleSubmit}>
      {/*<form action="http://localhost:8080/usuarios" method="post" name="formulario_cadastro">*/}
      <form>
        <div id="informacoes">
          <label htmlFor='nome'>Nome</label>
          <input type="text" name = "nome" placeholder="Seu nome" class="inputing" />
        </div>

        <div id="email" >
          <label htmlFor='email'>Email</label>
          <input type="email" name="email" placeholder="Email" class="inputing" /> 
        </div>

        {/*<div id="senha" >
          <input type="password" name="input_senha" placeholder="Senha" class="inputing" />
        </div>

        <div id="tipo_conta"> 
          <ul>
            <li>
              <input type="radio" name="conta_tipo" /> <br />
              <label>Cliente</label>
            </li>
            <li> 
              <input type="radio" name="conta_tipo" /> <br />
              <label>Profissional</label>
            </li>
          </ul>   
        </div>*/}

        <button type="submit">
          Cadastrar
        </button>
      </form>
    </div>

  );
}

async function handleSubmit(event) {
  event.preventDefault();

  const data = {
    nome: event.target.nome.value,
    email: event.target.email.value,
  }

  const JSONdata = JSON.stringify(data); 

  console.log(JSONdata);

  const endpoint = 'http://localhost:8080/usuarios';

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Types': '*',
      'Access-Control-Request-Headers': '*',
      'Accept': '*/*',
    },
    body: JSONdata,
  }

  const response = await fetch(endpoint, options);

  const result = await response.json();

  console.log(result);
}

export default function FormularioCadastro() {
  return (
    <section>
      <Apresentacao />
      
      <Formulario />
    </section>
  );
}

