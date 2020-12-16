import React from 'react';

import { Container , Form , Button } from 'react-bootstrap';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import './index.css';

const CadastroTurma =() => {
    return(
        <div className="completo">
        <Menu />
        <Container className="flex">
           <Container className='form-height'>
           <Container className= "Texto">
                      <h1>Edux</h1>
                      <h2>Cadastre uma turma e Começe a utilizar</h2>
                      
                  </Container>  
                  
  
                <Form className='form-signin' >
                    
                    <br/>
                    <h3>Cadastro de Turma</h3>
                    <hr/>
                    
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Nome da Turma </Form.Label>
                        <Form.Control type="nome"  placeholder="Informe o nome da turma" required />
                    </Form.Group>

                  
  
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control type="nome"  placeholder="Descrição"  required/>
                    </Form.Group>

                    <h4>Adicionar Alunos</h4>
                    
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Nome do Aluno </Form.Label>
                        <Form.Control type="nome"  placeholder="Nome do aluno"  required/>
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Criar Turma
                    </Button>
                    
                    
                </Form>
            </Container>
  
              
        </Container>         
        <Rodape />
        </div>
    )
}

export default CadastroTurma