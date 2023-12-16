import { useState } from 'react'
import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import Alert from "./Alert";
import Desarrolladores from './Desarrolladores';

export default function Registro(){

    const [error, setError] = useState(0);
    const [succes, setSuccess] = useState(0);

    return (
        <>
            
            <div className="container">
                <SocialButton facebook="fi fi-brands-facebook" github ="fi fi-brands-github" linkedin="fi fi-brands-linkedin"></SocialButton>        
                <Formulario error={error} setSuccess={setSuccess} setError={setError}></Formulario>
                <Alert error={error} succes={succes}></Alert>
                <p><b>Proyecto desarrollado por:</b></p>
                <Desarrolladores nombre="Belén Vera"></Desarrolladores>                
                <Desarrolladores nombre="Gabriel Cartes"></Desarrolladores>
            </div> 

        </>
    );
}