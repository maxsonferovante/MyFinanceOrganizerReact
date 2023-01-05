import Message from '../layout/Message'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import styles from './Filiados.module.css'


import {useLocation} from 'react-router-dom'

function Filiados(){
    const location = useLocation()

    let message = ""
    if (location.state){
        message = location.state.message
    }

    return (
        <div className={styles.filiados_details}>
        <div className={ styles.title_container }>
            <h1> Olá, dfsdfd</h1>
            {message && <Message msg={message} type="success"/>}
            <LinkButton to="/novofiliado" text="Adicionar Filiado(a)"  />            
       </div>
            <Container className="start">
                <p>Filiados</p>
            </Container>
        </div>
            
    )
    
    
}

export default Filiados