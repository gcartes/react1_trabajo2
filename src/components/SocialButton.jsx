export default function SocialButton({facebook,github,linkedin}){

    return(
        <>

            <div className="container text-center">
                <h3>Crea una Cuenta</h3>
                <div className="row align-items-start">
                    <div className="col">
                    <i className={facebook}></i>
                    </div>
                    <div className="col">
                    <i className={github}></i>
                    </div>
                    <div className="col">
                    <i className={linkedin}></i>
                    </div>
                </div>
                <p><small>O usa tu email para registrarte</small></p>
            </div>
            
        </>
    );
    

}