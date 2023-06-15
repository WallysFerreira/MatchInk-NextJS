import Image from "next/image";
import styles from '../style/BalaoTatuador.module.css';

export default function BalaoTatuador(props) {
  const tatuador = props.tatuador;

  return (
      <div className={styles.container}>
        <a> <Image src="/Tela6/instagramVermelho.svg" alt="icon instagram" width="21" height="21" /> </a>

        <div className={styles.meio}>
          <Image className={styles.fotoPerfil} src={tatuador.url_foto_perfil} alt="Foto do perfil" width="160" height="160" />
          <div className={styles.informacoes}>
            <h2>{tatuador.nome}</h2>
            <p>{tatuador.bio}</p>
          </div>
        </div>

        <div className={styles.icones}>
          <a> <Image src="/Tela6/calendarioPreto.svg" alt="icon calendario" width="20" height="20" /> </a>
          <a> <Image src="/Tela6/mensagemPreto.svg" alt="icon mensagem" width="20" height="20" /> </a>
        </div>
      </div>
  );
}
