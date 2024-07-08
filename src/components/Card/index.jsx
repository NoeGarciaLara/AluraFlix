import styles from './Card.module.css';
import data from '../../../db.json';
import eliminar from "../Card/eliminar.png";
import editar from "../Card/editar.png";

function Card({ id, imagen, link }) {

    return (

        <div className={styles.card}>
            <a className={styles.imagen} target="_blank" href={link}>
                <img className={styles.cardImagen} src={imagen} />
            </a>
            <div className={styles.botones}>
                <button>
                    <img src={eliminar} alt='Boton eliminar' />
                    ELIMINAR
                </button>
                <button>
                    <img src={editar} alt='Boton editar' />
                    EDITAR
                </button>
            </div>
        </div>
    )
}

export default Card