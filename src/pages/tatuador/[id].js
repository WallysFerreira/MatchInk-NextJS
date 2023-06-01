import Rodape from "../../components/rodape";
import BalaoTatuador from "../../components/balaoTatuador";
import Portfolio from "../../components/portfolio";
import BalaoEstudio from "../../components/balaoEstudio";

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
  console.log(tatuador);
  return (
    <main>
      <BalaoTatuador tatuador={tatuador} />
      <BalaoEstudio />
      <Portfolio />
      <Rodape />
    </main>
  );
}

