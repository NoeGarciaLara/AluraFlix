import { useEffect, useState } from 'react';
import data from '../../../db.json';
import Card from '../Card';
import styles from './Body.module.css';

function Body() {

    const [filteredFrontEnd, setFilteredFrontEnd] = useState([]);
    useEffect(() => {
        setFilteredFrontEnd(data.videos.filter((video) => video.category == "FRONT END"));
    }, [data]);

    const [filteredBackEnd, setFilteredBackEnd] = useState([]);
    useEffect(() => {
        setFilteredBackEnd(data.videos.filter((video) => video.category == "BACK END"));
    }, [data]);

    const [filteredInno, setFilteredInno] = useState([]);
    useEffect(() => {
        setFilteredInno(data.videos.filter((video) => video.category == "INNOVACIÓN Y GESTIÓN"));
    }, [data]);

    return (<>
        <div className={styles.frontEndContainer}>
            <h1>Front End</h1>
            <div className={styles.frontEndContainerVideos}>
                {
                    filteredFrontEnd.map((item, index) => (
                        <div className={styles.frontEnd} key={index}>
                            <Card key={index} id={index} imagen={item.photo} link={item.link}></Card>
                        </div>

                    ))}
            </div>
        </div>
        <div className={styles.frontEndContainer}>
            <h1>Back End</h1>
            <div className={styles.frontEndContainerVideos}>
                {
                    filteredBackEnd.map((item, index) => (
                        <div className={styles.frontEnd} key={index}>
                            <Card key={index} id={index} imagen={item.photo} link={item.link}></Card>
                        </div>

                    ))}
            </div>
        </div>
        <div className={styles.frontEndContainer}>
            <h1>Inovación y Gestión</h1>
            <div className={styles.frontEndContainerVideos}>
                {
                    filteredInno.map((item, index) => (
                        <div className={styles.frontEnd} key={index}>
                            <Card key={index} id={index} imagen={item.photo} link={item.link}></Card>
                        </div>

                    ))}
            </div>
        </div>

    </>
    )
}

export default Body