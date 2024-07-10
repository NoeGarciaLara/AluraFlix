import banner from '../../assets/banner1.png';
import style from './Banner.module.css';
import TituloBanner from '../TituloBanner';
import { useState } from 'react';


function Banner() {

    const [category, setCategory] = useState("FRONT END");



    return (

        <div>
            <div className='banner'>
                <main id="banner" className={style.layer} style={{ backgroundImage: `url(${banner})`}}>
                <div className={style.gradient}></div>
                    <section className={style.containerTexto}>
                    <TituloBanner category={category}></TituloBanner>
                    <h1 className={style.titulo}>Challenge React</h1>
                    <p className={style.parrafo}>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
                    </section>
                    <section className={style.containerBanner}>
                        <iframe
                            src='https://www.youtube.com/embed/ov7vA5HFe6w?si=rFYWWhqKMEWzxiJn'
                            className={style.video}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Banner

