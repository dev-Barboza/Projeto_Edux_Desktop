import React, {useState} from 'react';
import { useFirebaseApp } from 'reactfire';
import { useHistory } from  'react-router-dom';

import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import { Container , Form , Button } from 'react-bootstrap';
import Logo2 from  '../../assets/img/logo_2.png';
import './login.css';




const Login = () => {
    const history = useHistory();
    const firebase = useFirebaseApp();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const logar = (event) => {
        event.preventDefault();

        console.log(`${email} - ${senha}`);

        firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(result => {
            localStorage.setItem('Edux', result.user.refreshToken);
            alert('Seja bem vindo ')
            //navega para a página 

            history.push('/turma');
        })
        .catch(error => {
            alert('Email ou Senha incorreto ')

            
            console.error(error);
        })
}
    return (
      <div className="completo">
      <Menu />
            <Container className="first">
            <Container className='second'>
                <Container className= "Texto">
                    <div class="div">

                    <h1><img src={Logo2} alt="Logo do Edux"/></h1>
                    <h2>Faça Parte Voce também! <br/>Entre agora para usufruir <br/>todos os beneficios disponiveis </h2>
                   

                    </div>
                </Container>  

                <Container className='second2'>
                 <Form className='uno' onSubmit={ event => logar(event) }>
                    <div className='text-center'>
                       <img src="" alt=""/>
                    </div>
                    <br/>
                    
                    <hr/>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} onChange={ event => setEmail(event.target.value)} placeholder="Informe o email" required/>
                    </Form.Group>
                    <Form.Group controlId="formBasicSenha">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" value={senha} onChange={ event => setSenha(event.target.value)} placeholder="Senha" required/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                    <br/><br/>
                    <a href="/cadastrar" style={{ marginTop : '30px' }}>Não tenho conta!</a>
                 </Form>
             </Container>
          </Container>

            
        </Container>         
      <Rodape />
      </div>
  )

 }


export default Login