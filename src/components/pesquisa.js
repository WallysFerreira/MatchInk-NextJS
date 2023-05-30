import Image from 'next/image';
import style from '../style/Pesquisa.module.css';

export default function Pesquisa() {
  return (
    <div className={style.pesquisa}>
      <div className={style.detalhes}>
        <Image src="/barraDePesquisa/lupaPesquisa.svg" alt="" width="18" height="18" />
        <input type="text" placeholder="Pesquisar um estúdio de tatuagem" />
      </div>
    </div>
  );
}
