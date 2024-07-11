import styles from './Card.module.css';
import eliminar from "../Card/eliminar.png";
import editar from "../Card/editar.png";
import { useVideoContext } from '../../context';

function Card({ id, imagen, link, onEdit }) {
    const { deleteVideo } = useVideoContext();

    const handleDelete = async (e) => {
        e.stopPropagation();
        await deleteVideo(id);
    };

    return (
        <div className={styles.card}>
            <a className={styles.imagen} target="_blank" rel="noopener noreferrer" href={link}>
                <img className={styles.cardImagen} src={imagen} alt="Card" />
            </a>
            <div className={styles.botones}>
                <button onClick={handleDelete}>
                    <img src={eliminar} alt='Boton eliminar' />
                    ELIMINAR
                </button>
                <button onClick={(e) => { e.stopPropagation(); onEdit({ id, imagen, link }); }}>
                    <img src={editar} alt='Boton editar' />
                    EDITAR
                </button>
            </div>
        </div>
    );
}

export default Card;