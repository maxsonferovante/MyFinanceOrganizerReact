import { Link } from "react-router-dom";
import Container from "./Container";

import styles from "./Navbar.module.css";
import logo from "../../img/logo_preto.svg"

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Unidade Popular" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>        
        
          <li className={styles.item}>
            <Link to="/filiados">Filiados</Link>
          </li>
          <li className={styles.item}>
            <Link to="/Financeiro">Financeiro</Link>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Navbar;