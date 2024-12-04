import React from "react";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.loginBd}>
      <header>
        <div className={styles.logo}>
          <img
            className={styles.logoImg}
            src="img/Logo.png"
            alt="Logo da Pizzaria"
          />
        </div>
        <h1>BEM-VINDO!</h1>
      </header>
      <main>
        <section aria-label="Login">
          <form action="./home.html" className={styles.login}>
            <div className={styles.loginEscopo}>
              <label htmlFor="email" className={styles.loginTexto}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.loginEmail}
                required
              />
              <label htmlFor="senha" className={styles.loginTexto}>
                Password
              </label>
              <input
                type="password"
                id="senha"
                name="senha"
                className={styles.loginEmail}
                required
              />
              <div className={styles.loginButton}>
                <button className={styles.buttonLogin}>Entrar</button>
              </div>
              <a className={styles.buttonText} href="./">
                Esqueceu sua senha?
              </a>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Login;
