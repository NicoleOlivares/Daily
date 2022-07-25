import React from "react";
//importando imagen de logo
import email from "../img/email.png";
//importando imagen de logo
import logo500x300 from "../img/logo-500x300.png";

const RecuperacionContraseñaComponent = () => {
    return (
        <div>
            <header className="container position-relative d-flex justify-content-between align-items-center">
                <div className="my-3"><a type="button" className="btn btn-primary align-middle " href="/">Atrás</a></div>
                <img className="logo" src={logo500x300} alt="Logo Daily Stand APP" />
            </header>
            <section className="container">
                <div className="div-titulo col d-flex justify-content-center align-items-center">
                    <p className="border border-dark py-3 px-5 mt-3 rounded-3 text-center">Recuperación de cuenta</p>
                </div>
                <div className="div-form col d-flex justify-content-center align-items-center">
                    <form action="#" method="post" className="col-sm-5">
                        <label className="form-label" for="email">Email</label>
                        <div className="input-group flex-nowrap mb-4">
                            <span className="input-group-text" id="addon-wrapping"><img className="email" src={email} alt="" /></span>
                            <input id="email" type="text" className="form-control" required placeholder="correo@jaja.cl" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div>
                        <div className="position-relative d-flex justify-content-center">
                            <input className="btn btn-primary" type="button" value="Recuperar Cuenta" />
                        </div>
                    </form>
                </div>
            </section>
        </div>);
}

export default RecuperacionContraseñaComponent;