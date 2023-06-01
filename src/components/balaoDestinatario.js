import Image from "next/image";

export default function BalaoDestinatario() {
  return (
    <section>
      <div>
        <Image src="/Tela7/fotoTatuadora.png" alt="tatuadora" width="50" height="50" />
        <Image src="/Tela7/statusOnline.svg" alt="status online" width="8" height="8" />
      </div>

      <div>
        <h1>Jennifer L.</h1>
        <p>jenni_re</p>
      </div>

      <div>
        <Image src="/Tela7/pontinhoOpcoes.svg" alt="" width="5" height="5" />
        <Image src="/Tela7/pontinhoOpcoes.svg" alt="" width="5" height="5" />
        <Image src="/Tela7/pontinhoOpcoes.svg" alt="" width="5" height="5" />
      </div>
    </section>
  );
}
