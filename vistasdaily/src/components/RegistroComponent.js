import React from "react";
//importando imagen de logo
import logo500x300 from "../img/logo-500x300.png";

const RegistroComponent = () => {
    return (
        <div className="fondo1">
            <div className="contenedor container-fluid">
                <div className="header row">
                    <div className="col">{/* <h3>header1</h3> */}</div>
                    <div className="titulo2 col text-center border border-secondary m-5 p-2">
                        <h3>Registro de Usuario</h3>
                    </div>
                    <div className="col">{/* <h3>header3</h3> */}</div>
                </div>{" "}
                {/* cierrra 1era row*/}
                <div className="main row">
                    <div className="col">{/* <h3>main1</h3> */}</div>
                    <div className="col">
                        {/* <h3>main2</h3> */}
                        <div>
                            {/*CONTIENE FORMULARIO*/}
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1" />
                                    <input
                                        type="text"
                                        className="form-control"
                                        aria-describedby="emailHelp"
                                        placeholder="Nombre..."
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1" />
                                    <input
                                        type="text"
                                        className="form-control"
                                        aria-describedby="emailHelp"
                                        placeholder="Apellido..."
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1" />
                                    <input
                                        type="text"
                                        className="form-control"
                                        aria-describedby="emailHelp"
                                        placeholder="RUT:11111111-1"
                                    />
                                </div>
                                <br />
                                <div className="form-group">
                                    <label className="text-black-50" htmlFor="exampleInputEmail1">
                                        Fecha de nacimiento:
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        aria-describedby="emailHelp"
                                        placeholder=""
                                    />
                                </div>
                                <br />
                                <div className="input-group ">
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
                                <br />
                                <div className="input-group">
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
                                <br />
                                <div className="botonesCentro text-center">
                                    <button type="submit" className="btn btn-secondary ">
                                        Registrar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col">{/* <h3>main3</h3> */}</div>
                </div>
                {/* cierrra 2da row*/}
                {/*Fila Pie de página*/}
                <div className="row align-items-end">
                    <div className="col-2">
                        <a
                            type="button"
                            className="btn btn-primary align-middle "
                            href="/"
                        >
                            Atrás
                        </a>
                    </div>
                    <div className="col-8"></div>
                    <div className="col-2 text-center">
                        <img src={logo500x300} id="logovistageneral" />
                    </div>
                </div>
            </div>
            {/* cierrra el div principal*/}
        </div>);

}

export default RegistroComponent;