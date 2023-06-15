import styles from '../style/BalaoEstudio.module.css';

export default function BalaoEstudio(props) {
  const estudio = props.estudio;
  console.log(estudio);

  return (
    <section className={styles.container}>
      <div className={styles.informacoes}>
        <p>{estudio.nome} <br />
        {estudio.cidade} |SEG - DOM <br />
        08h às 19h</p>
      </div>

      <div className={styles.pontos}>
        <h1>{estudio.nota}/10</h1>
      </div>
    </section>
  );
}
