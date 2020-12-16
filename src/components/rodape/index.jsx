import React from 'react'
import './index.css'
import LogoB2 from  '../../assets/img/logo_branco_2-8.png'
const Rodape = () =>{
    return(
        
    <footer>
        <div class="containerFooter">
        <div class="ajudas">
        <h4>Relate um problema</h4>
        <h4>Não encontrou a sua insituição?</h4>
        <h4>Denuncie algum abuso</h4>
        <h4>Fale conosco</h4>
        </div>

        
        <img src={LogoB2} alt="Logo do edux"/>
        
        
        <div class="redes">
            <h4>Siga-nos também em:</h4>
            <ul>
                <li><a href="#facebook">Facebook</a></li>
                <li><a href="#instagram">Instagram</a></li>
                <li><a href="#twitter">Twitter</a></li>
            </ul>
        </div>
        </div>
        <h4 class="direitos">Todos os direitos da marca Edux são propriedades do Grupo 5</h4>
    </footer>
    )
}
export default Rodape