import banner from '../../assets/banner1.png';
import style from './Banner.module.css';
import TituloBanner from '../TituloBanner';
import { useState } from 'react';


function Banner() {

    const [category, setCategory] = useState("Front End");



    return (

        <div>
            <div className='banner'>
                <main id="banner" className={style.layer} style={{ backgroundImage: `url(${banner})` }}>
                    {<TituloBanner category={category}></TituloBanner>
                /*<h1>
                <p></p>
                <Player></Player> */}
                </main>
            </div>
        </div>
    )
}

export default Banner

