import { SignInButton } from "../SignInButton";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="Webpage Logo"></img>
        <nav>
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        <AiOutlineShoppingCart className={styles.cartIcon} />
        <SignInButton />
      </div>
    </header>
  );
}
