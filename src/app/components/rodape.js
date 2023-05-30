import Image from 'next/image';
import style from '../style/Rodape.module.css'

export default function Rodape() {
  return (
    <footer className={style.rodape}>
      <div className={style.botoes}>
        <Image src="/barraDeBaixo/account.svg" width="21" height="19" alt="" />
        <Image src="/barraDeBaixo/home.svg" width="21" height="19" alt="" />
        <Image src="/barraDeBaixo/favorite.svg" width="21" height="19" alt="" />
      </div>
    </footer>
  );
}
