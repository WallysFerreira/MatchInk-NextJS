import Rodape from "../../components/rodape";
import BalaoTatuador from "../../components/balaoTatuador";
import Portfolio from "../../components/portfolio";
import BalaoEstudio from "../../components/balaoEstudio";
import Image from "next/image";

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
      <Image src="/Tela6/Capa.png" alt="" width="412" height="220" />
      <BalaoTatuador tatuador={tatuador} />
      <BalaoEstudio />
      <Portfolio />
      <Rodape />
    </main>
  );
}

