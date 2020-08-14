import React from 'react';

import './styles.css';

import WhatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem () {

    return(
        <article className="teacher-item">
            <header>
                <img src="https://www.nube.com.br/media/noticias/2008/06/17/1049/perfil-profissional-sucesso-carreira-caracteristicas_400x600.jpg" alt="Zé"/>
                <div>
                    <strong>Profffy Robson</strong>
                    <span>Quimica</span>
                </div>
            </header>
                <p>
                    Doutorado em Quimica <br/><br/>
                    Ensino a explodir as coisas KKKKKKKK.

                   
                </p>

            <footer>
                <p>
                    Preço/Hora 
                    <strong>R$10,00</strong>
                </p>
                <button type="button">
                    <img src={WhatsappIcon} alt="whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}


export default TeacherItem;
