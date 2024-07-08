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
            <h1>FRONT END</h1>
            <div className={styles.frontEndContainerVideos}>
                {
                    filteredFrontEnd.map((item, index) => (
                        <Card key={index} id={index} imagen={item.photo} link={item.link} />
                    ))}
            </div>
        </div>
        <div className={styles.frontEndContainer}>
            <h1>BACK END</h1>
            <div className={styles.frontEndContainerVideos}>
                {
                    filteredBackEnd.map((item, index) => (
                        <Card key={index} id={index} imagen={item.photo} link={item.link} />
                    ))}
            </div>
        </div>
        <div className={styles.frontEndContainer}>
            <h1>INNOVACIÓN Y GESTIÓN</h1>
            <div className={styles.frontEndContainerVideos}>
                {
                    filteredInno.map((item, index) => (
                        <Card key={index} id={index} imagen={item.photo} link={item.link} />
                    ))}
            </div>
        </div>

    </>
    )
}

export default Body