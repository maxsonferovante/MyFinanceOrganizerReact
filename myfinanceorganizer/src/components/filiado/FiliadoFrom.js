import {useEffect, useState} from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

import styles from './FiliadoForm.module.css'



function FiliadoForm({handleSubmint, btnText, filiadoData}){

    const [localityList, setLocality] = useState([])
    const [filiado, setFiliado] = useState(filiadoData || {})

    const [localityFiliado, setLocalityFiliado] =useState ([])



    useEffect(() =>{    
    fetch("http://localhost:5000/locality",{
        method: "GET",
        headers :{
            'Content-Type': 'aplication/json'
        }
    
        }).then((resp) => resp.json())
        .then((data) => {
            setLocality(data)
        })
        .catch((err) => console.log(err))
    

    },[])

    function handleChange(e){
        setFiliado({ ...filiado, [e.target.name]: e.target.value })
        console.log(filiado)
    }
    

    function handleLocality(e){
        setLocalityFiliado({ 
            id: e.target.value,
            name: e.target.options[e.target.value].text
    }) 
    console.log(filiado)
    }

    const submitProps = (e) =>{
        e.preventDefault()
        filiado.locality = localityFiliado
        handleSubmint(filiado)
    };
    
    return(
        <form onSubmit={submitProps} className={styles.form}>
            <Input 
            type="text" 
            text="Nome" 
            name="name" 
            placeholder="Insira o nome do(a) filiado(a)" 
            handleOnChange={handleChange}
            value = {filiado.name ? filiado.name : ''}/>
            
            <Input type="tel" 
            text="Contato" 
            name="contact" 
            placeholder="Insira o contato do(a) filiado(a)" 
            handleOnChange={handleChange}
            valeu = {filiado.contats ? filiado.contats : ''}
            />
            <Select 
            name="locality_id" 
            text="Selecione o Municipio" 
            options={localityList} 
            handleOnChange={handleLocality}
            value={filiado.locality ? filiado.locality : '' }/>
            
            <SubmitButton text={btnText}/>            
        </form>

    )
}
export default FiliadoForm