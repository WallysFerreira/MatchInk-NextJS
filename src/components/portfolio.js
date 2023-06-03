import Image from 'next/image';

export default function Portfolio() {
  return (
    <section>
      <Avaliacao />
      
      <Fotos />
      
      <div id="adicionar">
        <a> <Image src="/Tela6/Add.svg" alt="icon adicionar" width="19" height="19" /> </a>
      </div> 
    </section>
  );
}

export function Avaliacao() {
  return (
    <div id="avaliacao">
      <div>
        <Image src="/Tela6/likePreto.svg" alt="icon like" width="19" height="19" />
          <p>777</p>
      </div>

      <div>
        <Image src="/Tela6/visuPreto.svg" alt="icon visual" width="19" height="19" />
        <p>2408</p>
      </div>
    </div>
  );
}

export function Fotos() {
  return (
    <div id="fotosPortfolio">
      <Image src="/Tela6/fotoPortfolio1.png" alt="foto de portfolio" width="157" height="187" />
      <Image src="/Tela6/fotoPortfolio2.png" alt="foto de portfolio" width="157" height="187" />
      <Image src="/Tela6/fotoPortfolio3.png" alt="foto de portfolio" width="157" height="187" />
      <Image src="/Tela6/fotoPortfolio4.png" alt="foto de portfolio" width="157" height="187" />
    </div>
  );
}
