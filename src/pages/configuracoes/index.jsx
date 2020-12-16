import React from 'react';
import { Container , Form , Button } from 'react-bootstrap';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import Logo2 from  '../../assets/img/logo_2.png';
import './index.css';

const Configuracoes = () => {
    return (
        <div className="completo">
        <Menu />
        <Container className="flex">
           <Container className='form-height'>
                  <Container className= "Texto">
                    <h1><img src={Logo2} alt="Logo do Edux"/></h1>
                      <h2>Atualize seu cadastro</h2>
                      
                  </Container>  
  
                <Form className='form-signin' >
                    
                    <br/>
                    <h3>Atualização de cadastro</h3>
                    <hr/>
                    
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email"  placeholder="Informe o email" required />
                    </Form.Group>

                  
  
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password"  placeholder="Senha"  required/>
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Alterar
                    </Button>
                    
                    
                </Form>
            </Container>
  
              
        </Container>         
        <Rodape />
        </div>
    )
}

export default Configuracoes