import React, {useEffect,useState} from 'react';
import {Form, Button, Table, Card, Container} from 'react-bootstrap';
import { db } from '../../utils/firebaseConfig';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';


const AtividadesPage = () => {

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

    const remover = (event) => {
        event.preventDefault(event)

        db.collection('atividades')
            .doc(event.target.value)
            .delete()
            .then(() => {
                alert('Atividade Apagada ');
                listarAtividades();
                 
            })
    }

    const editar = (event) => {
        event.preventDefault();
        
        try {
            db.collection('atividades')
                .doc(event.target.value)
                .get()
                .then(doc => {
                    setId(doc.id );
                    setNome(doc.data().nome);
                    setDescricao(doc.data().descricao);
                });
            
        } catch (error) {
            console.error(error)
            
        }
    }

    return(
        <div>
            <Menu />
            <Container>
                
                <h1>Atividades</h1>
                <p>Gerencie suas atividades</p>
                <Card>
                    <Card.Body>
                        <Form onSubmit={event => salvar(event)}>
                            <Form.Group controlId="formBasicNome">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" value={nome} onChange={event => setNome(event.target.value)} placeholder="Titulo da Atividade"></Form.Control>
                            </Form.Group>
                            
                            
                            <Form.Group controlId="formBasicUrl">
                                <Form.Label>Descrição</Form.Label>
                                <Form.Control as="textarea" rows={3} value={descricao} onChange={event => setDescricao(event.target.value)}/>
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
                            atividades.map((item, index) => {
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

export default AtividadesPage;