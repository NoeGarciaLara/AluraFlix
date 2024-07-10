import style from './TituloBanner.module.css'

function TituloBanner({category, color}){

    return(
            <h1 className={style.titulo}>{category}</h1>
        )
}

export default TituloBanner