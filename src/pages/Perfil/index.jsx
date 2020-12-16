import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import Img from '../../assets/img/perfil.png'
import './index.css'

const Perfil = () => {
    return(
        <div className="body">
            <Menu/>
            <Container>
                <Container className="perfil">
                    <Row className="Row">
                        <Col xs={6} md={4}>                       
                            <Image className="imgPerfil" src={Img} roundedCircle />
                            <p>(Nome Usuario)</p>
                        </Col>                
                    </Row>
                    <Container className="container2">
                        <p>Estuda em (Instituição)</p>
                        <p>Nasceu em (DataNasc)</p>
                        <p>Mora em (Endereço)</p>
                    </Container>
                </Container>
               
                
                
                <div class="objetivos">
                <Container className="tabela">
                    <h3>Metas e objetivos conquistados</h3>
                    <p>Entregou 3 atividades no em 3 semanas</p>
              </Container>


                 <Container>

                                    

                    <div class="media-body">
                        <h4 class="media-heading">Professora Raquel</h4>
                        <p>Bom dia queridos, para a nossa nota mensal, vocês farão uma produção de texto dissertativa, modelo Enem com o tem: "A ansiedade contemporânea". Valendo 10! Boa sorte...</p>
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">Professor Rafael</h4>
                        <p>Caros alunos, hoje vou enviar uma lista de exercícios sobre cinemática via e-mail! São 50 exercícios, e vocês têm uma semana para entregar! Boa lista...</p>
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">Professor Alexandre</h4>
                        <p>Queridos alunos, quero para a próxima aula uma pesquisa com os melhores exercícios de gramática de vestibular (Enem, FUVEST, Unicamp...). Iremos praticar muito, um abraço!</p>
                    </div>
                 
                    <button href="/atividades"  type="button" class="btn btn-outline-warning">Atividades</button>
                  

                                <div class="container">
            <h2>Turmas que você participa</h2>
                 
            <table class="table table-warning table-hover">
                <thead>
                <tr>
                    <th>Turma</th>
                    <th>Nome do Professor</th>
                    <th>Nota</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Turma 1</td>
                    <td>Rafael Hanashiro</td>
                    <td>6.0</td>
                </tr>
                <tr>
                    <td>Turma 2</td>
                    <td>Raquel Toledo</td>
                    <td>7.0</td>
                </tr>
                <tr>
                    <td>Turma 3</td>
                    <td>Alexandre Souza</td>
                    <td>8.0</td>
                </tr>
                </tbody>
            </table>
            </div>
               
                 </Container>

                </div>
   
           
            </Container>
            <Rodape/>
           
        </div>
    )
}

export default Perfil;