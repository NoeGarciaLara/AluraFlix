import { Link } from "react-router-dom";
import styles from "./Cabecera.module.css";
import logo from "./Logo.svg"
import CabeceraLink from "../CabeceraLink";

function Cabecera() {
    return (
        <header className={styles.cabecera}>
            <Link to="/">
                <section className={styles.logoContainer}>
                    <img src={logo} alt="Logo AluraFlix" />
                </section>
            </Link>
            <nav>
                <div className={styles.headerButton}>
                    <CabeceraLink url="/">
                        Home
                    </CabeceraLink>
                    <CabeceraLink url="/CrearVideo">
                        Crear Video
                    </CabeceraLink>
                </div>
            </nav>

        </header>
    )
}

export default Cabecera