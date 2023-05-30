export default function Cadastro() {
  return (
    <main>
      <div id="apresentacao_tela">
        <img src="img/Tela3/logoPreta.png" alt="logotipo do aplicativo de tatuagem. Dois prismas posicionados na direita e esquerda, voltados para o oposto, no centro, entre eles, há algo semelhante a uma 'varinha'"/>
        <div id="texto">
          <h2>
            Cadastre-se
          </h2>

          <span>
            Desfrute dos benefícios do MatchInk
          </span>
        </div>
      </div>

      <div id="campo_inputs">
        <form action="http://teste.com/usuarios/" method="post" name="formulario_cadastro" onsubmit="alert('Enviado')" >
          <div id="login">
            <input type="text" name = "input_login" placeholder="Login" class="inputing" />
          </div>

          <div id="email" >
            <input type="email" name="input_email" placeholder="Email" class="inputing" /> 
          </div>

          <div id="senha" >
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
          </div>

          <button type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </main>
  );
}
