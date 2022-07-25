import React from "react";
//importando imagen de logo
import logo500x500 from "../img/logo-500x500.png";
//importando imagen login con posit
import posit from "../img/posit1.png";

const LoginComponent = () => {
    return (
        <div className="container-fluid contenedor" id="fondo-color">

            {/* la clase contenedor es para ocupar el alto 100% en CSS */}
            <div className="cuerpo row contenedor">
                {/* la clase contenedor es para ocupar el alto 100% en CSS */}
                <div className="col inicio-L">
                    {/* columna divicion izquierda */}
                    <div className="row">
                        <div className="col-3">{/* un espacio vacio para centrar */}</div>
                        <div className="col text-center">

                            {/* columna central */}

                            {/* imagen del logo Daily Stand APP  */}
                            <img
                                id="logo-inicio"
                                src={logo500x500}
                                alt="logo Daily Stand App 500x500"
                            />

                            <div>
                                {/* titulo iniciar sesion centrado */}
                                <p className="text-center my-4">
                                    <strong>INICIAR SESION</strong>
                                </p>
                            </div>
                            <div className="mx-3">
                                {/* formulario */}
                                <div className="input-group m-3 ">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">
                                            <i className="fa-regular fa-envelope p-1" />
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Correo electronico"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </div>
                                <div className="input-group m-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">
                                            <i className="fa-solid fa-key p-1" />
                                        </span>
                                    </div>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Contraseña"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </div>
                                <div className="text-center my-5">
                                    {/* -------------- LLEVAR A LA PAGINA DE INICIO */}
                                    <div className="my-3">
                                        <a
                                            type="button"
                                            className="btn btn-primary btn-lg"
                                            href="/MisGrupos"
                                            role="button"
                                        >
                                            Iniciar Sesión
                                        </a>
                                    </div>
                                    {/* -------------- AGREGAR PAGINA PARA RECUPERAR CONTRASEÑA */}
                                    <div className="my-3">
                                        <a className="m-3" href="/RecuperacionCuenta">
                                            ¿Olvidaste tu contraseña?
                                        </a>
                                    </div>
                                    {/* -------------- LLEVAR A LA PAGINA DE REGISTRARSE */}
                                    <div className="my-3">
                                        <a
                                            type="button"
                                            className="btn btn-secondary btn-lg px-4"
                                            href="/Registro"
                                            role="button"
                                        >
                                            Registrarse
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">{/* un espacio vacio para centrar */}</div>
                    </div>

                </div>
                <div className="col inicio-R">

                    {/* aqui va el fondo azul con las imagenes */}
                     <img
                                id="posit"
                                src={posit}
                                alt="posit"
                            />
                </div>
            </div>
        </div>
    );
}

export default LoginComponent;