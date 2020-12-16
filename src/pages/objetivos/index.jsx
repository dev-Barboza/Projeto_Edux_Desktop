import React, {useEffect,useState} from 'react';
import {Form, Button, Table, Card, Container} from 'react-bootstrap';
import { db } from '../../utils/firebaseConfig';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';


const ObjetivosPages = () => {

    const [id, setId] = useState(0);
    const [nome, setNome] = useState('');
    const [criterios, setcriterios ] = useState(''); 

    const [objetivos, setObjetivos] = useState([]);

    useEffect(() =>{
        listarObjetivos();
    },[])

    const listarObjetivos = () => {
        try {
            db.collection('objetivos')
                .get()
                .then( (result) => {
                    console.log(result.docs);
                    const data = result.docs.map(doc =>{
                        return{
                            id : doc.id,
                            nome : doc.data().nome, 
                            criterios : doc.data().criterios
                        }

                        
                    })

                    setObjetivos(data); 
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

        const objetivo = {
            nome : nome,
            criterios :  criterios
        }
        
        if(id === 0){
            db.collection('objetivos')
                .add(objetivo)
                .then(() => {
                    alert('Objetivo Adicionado com Sucesso ');
                    listarObjetivos();
                    limparCampos();
                })
                .catch(error =>  console.error(error));
        }else{
            db.collection('objetivos')
                .doc(id)
                .set(objetivo)
                .then(() => {
                    alert('Objetivo Alterado com Sucesso ');
                   
                })
            
                
        }
                    listarObjetivos();
                    limparCampos();

                   

    }

    const limparCampos = () => {
        setId(0);
        setNome('');
        setcriterios('');
    } 

    const remover = (event) => {
        event.preventDefault(event)

        db.collection('Objetivos')
            .doc(event.target.value)
            .delete()
            .then(() => {
                alert('Objetivo Apagado ');
                listarObjetivos();
                 
            })
    }

    const editar = (event) => {
        event.preventDefault();
        
        try {
            db.collection('objetivos')
                .doc(event.target.value)
                .get()
                .then(doc => {
                    setId(doc.id );
                    setNome(doc.data().nome);
                    setcriterios(doc.data().criterios);
                });
            
        } catch (error) {
            console.error(error)
            
        }
    }

    return(
        <div>
            <Menu />
            <Container>
                
                <h1>Objetivos</h1>
                <p>Gerencie seus Objetivos</p>
                <Card>
                    <Card.Body>
                        <Form onSubmit={event => salvar(event)}>
                            <Form.Group controlId="formBasicNome">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" value={nome} onChange={event => setNome(event.target.value)} placeholder="Titulo do Criterio"></Form.Control>
                            </Form.Group>
                            
                            
                            <Form.Group controlId="formBasicUrl">
                                <Form.Label>Critérios</Form.Label>
                                

                                <Form.Control value={criterios} onChange={event => setcriterios(event.target.value)} placeholder="Digite o Critério"/>
                            </Form.Group>

                            
                           
                            <Button type="submit">Salvar</Button>
                        </Form>
                    </Card.Body>
                </Card>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                           
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            objetivos.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.nome}</td>
                                        <td>{item.descricao}</td>

                                        <td>
                                            <Button variant="warning" value={item.id} onClick={event => editar(event)} >Editar</Button>
                                            <Button variant="danger" value={item.id} onClick={event => remover(event)} style={{ marginLeft : '40px'}}>Remover</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
            <Rodape/>
        </div>
    )

}

export default ObjetivosPages;