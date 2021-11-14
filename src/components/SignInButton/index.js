import styles from "./styles.module.scss";

export function SignInButton() {
  const isUsrLoggedIn = true;

  return isUsrLoggedIn ? (
    <button className={styles.signInButton} type="button">
      SignOut
    </button>
  ) : (
    <button className={styles.signInButton} type="button">
      SignIn
    </button>
  );
}
