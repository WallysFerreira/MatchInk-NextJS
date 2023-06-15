import Image from "next/image";

export default function FormularioLogin() {
  return (
    <form action="" method="post" onsubmit="alert('Enviado')">
      <div id="login">
        <div id="email_input">
          <Image src="/Tela2/usuarioLogin.svg" alt=" Icone de usuário, é apenas um contorno da cabeça e ombros de uma pessoa, totalmente preto." id="iconeUsuario" width="63" height="63" />

          <input type="email" name="emailLogin" class="entrada" aria-invalid placeholder="Endereço de email" />
        </div>
                
        <p class="esqueceu"> 
          <a href="Pagina Esqueceu ALGO"> 
            Esqueceu email? 
          </a> 
        </p>
      </div>

      <div id="senha">
        <div id="senha_input">
          <Image src="/Tela2/cadeadoSenhaLogin.svg" alt="icone de um cadeado fechado para representar uma senha segura" id="iconeSenha" width="63" height="63" />

          <input type="password" name="senhaLogin" id="as" class="entrada" aria-invalid placeholder="Senha" />
        </div>

        <p class="esqueceu"> 
          <a href="Pagina Esqueceu ALGO"> 
            Esqueceu senha? 
          </a>
        </p>
      </div>
               
      <div id="manterConect" >
          <label>
            <input type="checkbox" name="manterConectado" />
            <span class="checkbox_customizado"></span>
            Continuar conectado?
          </label>
      </div>

      <button type="submit" class="centralizar" href="">
        <u>
            Log in
        </u>
      </button>
    </form>    
  );
}
