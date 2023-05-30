import Rodape from "../components/rodape";
import Pesquisa from "../components/pesquisa";
import '../style/globals.css';

export default function Mapa() {
  return (
    <section>
      <div id="map">
      </div>

      <Pesquisa />

      <Rodape />
    </section>
  );
}
