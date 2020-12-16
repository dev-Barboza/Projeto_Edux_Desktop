import React, {useEffect,useState} from 'react';

import { db } from '../../utils/firebaseConfig';
import'./index.css';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import imagem from '../../assets/img/alan.jpg'
import image from '../../assets/img/acod.jpg'
import AtividadesPage from '../atividades';
import img from '../../assets/img/ark.jpg'
import { Container , Form , Button } from 'react-bootstrap';

const Home = () => {

    const [id, setId] = useState(0);
    const [nome, setNome] = useState('');
    const [descricao, setDescricao ] = useState(''); 

    const [atividades, setAtividades] = useState([]);

    useEffect(() =>{
        listarAtividades();
    },[])

    const listarAtividades = () => {
        try {
            db.collection('atividades')
                .get()
                .then( (result) => {
                    console.log(result.docs);
                    const data = result.docs.map(doc =>{
                        return{
                            id : doc.id,
                            nome : doc.data().nome, 
                            descricao : doc.data().descricao
                        }

                        
                    })

                    setAtividades(data); 
                })
                .catch(error =>{
                    console.error(error);
                })
        } catch (error) {
            console.error(error)
        }
    }

    const salvar = (event) => {
        event.preventDefault(event)

        const atividade = {
            nome : nome,
            descricao :  descricao
        }
        
        if(id === 0){
            db.collection('atividades')
                .add(atividade)
                .then(() => {
                    alert('Atividade Adicionada com Sucesso ');
                    listarAtividades();
                    limparCampos();
                })
                .catch(error =>  console.error(error));
        }else{
            db.collection('atividades')
                .doc(id)
                .set(atividade)
                .then(() => {
                    alert('Atividade Alterada com Sucesso ');
                   
                })
            
                
        }
                    listarAtividades();
                    limparCampos();

                   

    }

    const limparCampos = () => {
        setId(0);
        setNome('');
        setDescricao('');
    } 

    



    return(

    <div>
        <Menu/>
        <Container >
        
            
        
        <tbody>
                    {
                            atividades.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.nome}</td>
                                        <td>{item.descricao}</td>

                                       
                                    </tr>
                                )
                            })
                        }
                    </tbody>
        
       
        </Container>
    
        <Rodape/>
    </div>
    

    )
    

}
export default Home