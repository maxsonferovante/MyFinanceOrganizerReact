import styles from './NovoFiliado.module.css'
import FiliadoForm from '../filiado/FiliadoFrom'
import Container from '../layout/Container'
import {useNavigate} from 'react-router-dom'

function NovoFiliado(){

    let history = useNavigate()

    function createPost(filiado){
       

        fetch('http://localhost:5000/filiados',{
            method: 'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(filiado)
            ,})
        
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            // Router version 6
            history('/filiados', { message: 'Cadastro feito com sucesso!' })
        })
        .catch(err => console.log(err))
    }

    return (
        <Container className="min-height">
            <div className={styles.newproject_container}>
            <h1>Adicionar Filiado</h1>
            <p>Adicione o(a) novo(a) Filiado(a) a Unidade Popular - UP</p>
            <FiliadoForm handleSubmint={createPost} btnText = "Adicionar Filiado(a)"/>
        </div>
        </Container>
        
       
    )
}

export default NovoFiliado