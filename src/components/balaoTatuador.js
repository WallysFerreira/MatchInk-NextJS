import Image from "next/image";
import '../style/Perfil.module.css';

export default function BalaoTatuador(props) {
  const tatuador = props.tatuador;
  console.log(tatuador);

  return (
    <section>
      <div>
        <a> <Image src="/Tela6/Instagram.svg" alt="icon instagram" width="70" height="70" /> </a>
      </div>

      <div id="bio">
        <Image id="fotoperfil" src={tatuador.url_foto_perfil} alt="Foto do perfil" width="300" height="300" />
        <h2>{tatuador.nome}</h2>
        <p>{tatuador.bio}</p>
      </div>

      <div id="iconcm">
        <a> <Image src="/Tela6/calendarioPreto.svg" alt="icon calendario" width="20" height="20" /> </a>
        <a> <Image src="/Tela6/mensagemPreto.svg" alt="icon mensagem" width="20" height="20" /> </a>
      </div>
    </section>
  );
}
