import BalaoEstudio from "../../components/balaoEstudio";
import Rodape from "../../components/rodape";
import styles from '../../style/PerfilEstudio.module.css';

export async function getServerSideProps({ params }) {
  const id = params.id;
  const res = await fetch(`http://localhost:8080/estudios/${id}`);
  const data = await res.json();

  return {
    props: {
      estudio: data
    }
  };
}

export default function Estudio({ estudio }) {
  return (
    <main>
      <div className={styles.fotos}>
        <div className={styles.nota}>
          <h1>{estudio.nota}/10</h1>
        </div>
      </div>

      <Rodape />
    </main>
  );
}
