import BarraMensagem from "../components/barraMensagem";
import Rodape from "../components/rodape";
import BalaoDestinatario from "../components/balaoDestinatario";

export default function Chat() {
  return (
    <section>
      <BalaoDestinatario />
      <BarraMensagem />
      <Rodape />
    </section>
  );
}
