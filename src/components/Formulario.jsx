import { useState } from "react";


export default function Formulario({error, setSuccess, setError}){

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [clave1, setClave1] = useState('');
    const [clave2, setClave2] = useState('');
    
    
    const regexTextos = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/    
    const regexEmail=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;


    const validarFormulario = (e)=>{
        e.preventDefault();
        
     
        if (nombre === ''){
            setSuccess('');
            return setError('Error al validar nombre');
        }

        if (!regexTextos.test(nombre)){
            setSuccess('');
            return setError('Error al validar nombre, solo letras');
        }


        if (email === ''){
            setSuccess('');
            return setError('Error al validar email');
        }

        if (!regexEmail.test(email)){
            setSuccess('');
            return setError('Error al validar email');
        }

        if (clave1 ===''){
            setSuccess('');
            return setError('Error debe ingresar una clave');
        }

        if (clave2 === ''){
            setSuccess('');
            return setError('Error debe ingresar confirmación de clave');
        }

        if (clave1 != clave2){
            setSuccess('');
            return setError('Las claves son diferentes');
        }

        setError('');
        return setSuccess('Muy bien Todo')

        
    }
    return (

        <>
            <form onSubmit={validarFormulario}>
                <div className="mb-3">
                    <input type="text" className="form-control" id="nombre" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className="mb-3">                
                    <input type="email" className="form-control" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}  />
                </div>        
                <div className="mb-3">                
                    <input type="password" className="form-control" id="clave1" placeholder="Contraseña" onChange={(e) => setClave1(e.target.value)}  />
                </div>        
                <div className="mb-3">                
                    <input type="password" className="form-control" id="clave2" placeholder="Repetir Contraseña" onChange={(e) => setClave2(e.target.value)}  />
                </div>        
                <div className="mb-3">                
                    <button type="submit" className="btn btn-success">Registrarse</button>
                </div> 
            </form>                            
        </>
    );
    

}