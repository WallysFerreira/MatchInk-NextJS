import Image from "next/image";

export default function BalaoTatuador() {
  return (
    <section>
      <div id="insta">
        <a> <Image src="/Tela6/Instagram.svg" alt="icon instagram" width="70" height="70" /> </a>
      </div>

      <div id="bio">
        <Image id="fotoperfil" src="/Tela6/fotoTatuadora.png" alt="Fotoperfil" width="70" height="70" />
        <h2>Jennifer L.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit, sed do eiusmod tempor <br />
                incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div id="iconcm">
        <a> <Image src="/Tela6/calendarioPreto.svg" alt="icon calendario" width="20" height="20" /> </a>
        <a> <Image src="/Tela6/mensagemPreto.svg" alt="icon mensagem" width="20" height="20" /> </a>
      </div>
    </section>
  );
}
