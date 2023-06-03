import styles from '../style/BalaoEstudio.module.css';

export default function BalaoEstudio() {
  return (
    <section className={styles.container}>
      <div className={styles.informacoes}>
        <p>Studio Recife <br />
        Recife |SEG - DOM <br />
        08h às 19h</p>
      </div>

      <div className={styles.pontos}>
        <h1>9.2/10</h1>
      </div>
    </section>
  );
}
