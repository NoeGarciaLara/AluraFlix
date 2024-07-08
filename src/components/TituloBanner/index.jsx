import style from './TituloBanner.module.css'

function TituloBanner({category, color}){

    return(
        <div>
            <h1>{category}</h1>
        </div>
    )
}

export default TituloBanner