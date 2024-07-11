import { useEffect, useState } from 'react';
import data from '../../../db.json';
import Card from '../Card';
import styles from './Body.module.css';

function Body({ onEdit }) {
    const [filteredFrontEnd, setFilteredFrontEnd] = useState([]);
    const [filteredBackEnd, setFilteredBackEnd] = useState([]);
    const [filteredInno, setFilteredInno] = useState([]);

    useEffect(() => {
        setFilteredFrontEnd(data.videos.filter((video) => video.category === "FRONT END"));
        setFilteredBackEnd(data.videos.filter((video) => video.category === "BACK END"));
        setFilteredInno(data.videos.filter((video) => video.category === "INNOVACIÓN Y GESTIÓN"));
    }, []);

    return (
        <>
            <div className={`${styles.frontEndContainer} ${styles.frontend}`}>
                <h1>FRONT END</h1>
                <div className={styles.frontEndContainerVideos}>
                    {filteredFrontEnd.map((item) => (
                        <Card key={item.id} id={item.id} imagen={item.photo} link={item.link} category={item.category} onEdit={onEdit} />
                    ))}
                </div>
            </div>
            <div className={`${styles.frontEndContainer} ${styles.backend}`}>
                <h1>BACK END</h1>
                <div className={styles.frontEndContainerVideos}>
                    {filteredBackEnd.map((item) => (
                        <Card key={item.id} id={item.id} imagen={item.photo} link={item.link} category={item.category} onEdit={onEdit} />
                    ))}
                </div>
            </div>
            <div className={`${styles.frontEndContainer} ${styles.innovaciónygestión}`}>
                <h1>INNOVACIÓN Y GESTIÓN</h1>
                <div className={styles.frontEndContainerVideos}>
                    {filteredInno.map((item) => (
                        <Card key={item.id} id={item.id} imagen={item.photo} link={item.link} category={item.category} onEdit={onEdit} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Body;