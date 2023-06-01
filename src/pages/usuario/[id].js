import Rodape from "../components/rodape";
import BalaoTatuador from "../components/balaoTatuador";
import Portfolio from "../components/portfolio";
import BalaoEstudio from "../components/balaoEstudio";

export default function PerfilUsuario() {
  return (
    <main>
      <BalaoTatuador />
      <BalaoEstudio />
      <Portfolio />
      <Rodape />
    </main>
  );
}

