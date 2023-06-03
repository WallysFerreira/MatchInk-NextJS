import Rodape from "../../components/rodape";
import BalaoTatuador from "../../components/balaoTatuador";
import Portfolio from "../../components/portfolio";
import BalaoEstudio from "../../components/balaoEstudio";
import Image from "next/image";
import styles from '../../style/PerfilTatuador.module.css';

export async function getServerSideProps({ params }) {
  const id = params.id;
  const res = await fetch(`http://localhost:8080/usuarios/${id}`);
  const data = await res.json();

  return {
    props: {
      tatuador: data
    }
  };
}

export default function Usuario({ tatuador }) {
  return (
    <main>
      <div className={styles.cima}>
        <BalaoTatuador tatuador={tatuador} />
      </div>
      
      <hr />

      <BalaoEstudio />
    </main>
  );
}

