import styles from "./Header.module.css";
import igniteLogo from '../Assets/ignite-Logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo de Ignite"/>
      <strong>Ignite Feed</strong>
    </header>
  );
}
