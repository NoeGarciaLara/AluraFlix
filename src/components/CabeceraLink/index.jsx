import { NavLink } from "react-router-dom";
import styles from "./CabeceraLink.module.css"

function CabeceraLink({ url, children }) {
    return (
        <NavLink to={url} className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.activeLink}` : styles.link
        }>
            {children}
        </NavLink>
    );
}

export default CabeceraLink