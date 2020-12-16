import React from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';

const NaoEncontrada = () => {
    return(
        <div>
            <Menu/>
                <div className="container">
                    <h1>404 - PÁGINA NÃO ENCONTRADA</h1>
                </div>
                
            <Rodape/>
        </div>
    )
}

export default NaoEncontrada;