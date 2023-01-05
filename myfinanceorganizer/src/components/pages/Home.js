import styles from './Home.module.css'
import add from '../../img/logo_preto.svg'
import LinkButton from '../layout/LinkButton'
import Container from '../layout/Container'

function Home(){
    return (
        <Container className="min-height">
            <section className={styles.home_container}>
            <h1>Bem vindo ao <span>Gestor Financeiro</span></h1>
            
            <p> Comece as cobranças da Unidade Popular!!!</p>
            <LinkButton to="/novofiliado" text="Adicionar Filiado(a)"  />

            <img src={add} alt="Unidade Popular"></img>
        </section>
        </Container>
        
    )
    
}

export default Home