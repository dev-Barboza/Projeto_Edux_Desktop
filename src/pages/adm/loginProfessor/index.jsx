import React from 'react';
import { Container , Form , Button } from 'react-bootstrap';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import './LoginProfessor.css';




const LoginProfessor = () => {

    return (
        <div className="completo">
    
      <Menu />
      <Container className="flex">
         <Container className='form-height'>
               
              <Form className='form-signin' >
                  
                  <br/>
                  <h3 class="Titulo">Login - Professor</h3>
                  <hr/>
                  
                  <Form.Group  class="email" controlId="formBasicEma   il">
                      <Form.Label>Email </Form.Label>
                      <Form.Control type="email"  placeholder="Informe o email" required />
                  </Form.Group>

                  <Form.Group class="senha" controlId="formBasicPassword">
                      <Form.Label>Senha</Form.Label>
                      <Form.Control type="password"  placeholder="Seu CPF é sua senha"  required/>
                  </Form.Group>
                  <Button class="botao" variant="primary" type="submit" >
                      Entrar
                  </Button>
                  <br/><br/>
                  
              </Form>
          </Container>

            
        </Container>         
      <Rodape />
      </div>
  )

}


export default LoginProfessor