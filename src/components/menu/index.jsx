import React from 'react'
import './index.css'
import {Navbar, Nav} from 'react-bootstrap'
import Logo2 from  '../../assets/img/logo_2.png'
import LogoB2 from  '../../assets/img/logo_branco_2-8.png'


const Header = () => {
    return(
    
        <header class="cabecalho">
          <h1><img src={LogoB2} alt="Logo do Edux"/></h1>
          <nav>
              <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/perfil">Perfil</a></li>
                <li><a href="/atividades">Atividades</a></li>
                <li><a href="/configuracoes">Configuração</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/cadastrar">Cadastrar</a></li>
                <li><a href="/turma">turma</a></li>
              </ul>
        </nav>
    </header>
    
    )
}
export default Header;