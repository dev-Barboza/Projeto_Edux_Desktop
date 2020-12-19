import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './pages/login';
import Turma from './pages/turma';
import Home from './pages/home';
import Cadastrar from './pages/cadastrar';
import Configuracoes from './pages/configuracoes';
import Atividade from './pages/atividades';
import NaoEncontrada from './pages/naoencontrada';
import reportWebVitals from './reportWebVitals';
import Perfil from './pages/Perfil';
import CadastroTurma from './pages/cadastroturma';
import Cadastroaluno from './pages/cadastroAluno';
import Objetivos from './pages/objetivos';
import { useHistory } from  'react-router-dom';
import {FirebaseAppProvider} from 'reactfire';
import firebaseConfig from './utils/firebaseConfig';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Turmas from './pages/Alunoturmas';






const routing = (
  <Router>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/cadastrar' component={Cadastrar} />
      <Route exact path='/perfil' component={Perfil} />
      <Route exact path='/configuracoes' component={Configuracoes} />
      <Route exact path='/atividades' component={Atividade} />
      <Route exact path='/naoencontrada' component={NaoEncontrada} />
      <Route exact path='/cadastroturma' component={CadastroTurma}/>
      <Route exact path='/turma' component={Turma}/>
      <Route exact path='/cadastroaluno' component={Cadastroaluno}/>
      <Route exact path='/objetivos' component={Objetivos}/>
      <Route exact path='/alunoturmas' component={Turmas}/>

      
      
      
    </Switch>
    </FirebaseAppProvider>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
