import React, {useEffect,useState} from 'react';
import {Form, Button, Table, Card, Container} from 'react-bootstrap';
import { db } from '../../utils/firebaseConfig';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';

import { useFirebaseApp } from 'reactfire';




const AlunosPage = () => {
    
   
    const firebase = useFirebaseApp();

    const [id, setId] = useState(0);
    const [nome, setNome] = useState('');
    
    
    const [alunos, setAlunos] = useState([]);

    useEffect(() =>{
        listarAlunos();
    },[])

    const listarAlunos = () => {
        try {
            db.collection('alunos')
                .get()
                .then( (result) => {
                    console.log(result.docs);
                    const data = result.docs.map(doc =>{
                        return{
                            id : doc.id,
                            nome : doc.data().nome, 
                            
                        }

                        
                    })

                    setAlunos(data); 
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

        const aluno = {
            nome : nome,
            
        }
        
        if(id === 0){
            db.collection('alunos')
                .add(aluno)
                .then(() => {
                    alert('Aluno Adicionado com Sucesso ');
                    listarAlunos();
                    limparCampos();
                })
                .catch(error =>  console.error(error));
        }else{
            db.collection('alunos')
                .doc(id)
                .set(aluno)
                .then(() => {
                    alert('Aluno Alterado com Sucesso ');
                   
                })
            
                
        }
                    listarAlunos();
                    limparCampos();

                   

    }

    const limparCampos = () => {
        setId(0);
        setNome('');
        
    } 

    const remover = (event) => {
        event.preventDefault(event)

        db.collection('alunos')
            .doc(event.target.value)
            .delete()
            .then(() => {
                alert('aluno Removido ');
                listarAlunos();
                 
            })
    }

    const editar = (event) => {
        event.preventDefault();
        
        try {
            db.collection('aluno')
                .doc(event.target.value)
                .get()
                .then(doc => {
                    setId(doc.id );
                    setNome(doc.data().nome);
                   
                });
            
        } catch (error) {
            console.error(error)
            
        }
    }

    return(
        <div>
            <Menu />
            <Container>
                
                <h1>Alunos</h1>
                <p>Gerencie seus Alunos</p>
                <Card>
                    <Card.Body>
                        <Form onSubmit={event => salvar(event)}>
                            <Form.Group controlId="formBasicNome">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" value={nome} onChange={event => setNome(event.target.value)} placeholder="Nome do aluno"></Form.Control>
                                
                            </Form.Group>
                            
                            
                            
                           
                            <Button type="submit">Salvar</Button>
                        </Form>
                    </Card.Body>
                </Card>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                           
                            <th>Nome</th>
                            
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            alunos.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.nome}</td>
                                       

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

export default AlunosPage;