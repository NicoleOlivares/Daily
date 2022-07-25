import React from "react";
//importando foto logo
import logo500x300 from "../img/logo-500x300.png";
//importando foto perfil
import fotoPerfil from "../img/fotoCarnet.jpg";
//importando foto maria
import Maria from "../img/4.jpg"
//foto Marcelo
import Marcelo from "../img/1.jpg";
//foto jose
import Jose from "../img/2.jpg";
//foto de juana
import Juan from "../img/3.jpg";

const VistaGeneralComponent = () => {
    return (
        <>
            {/*Contener de la pagina*/}
            <div className="container-fluid">
                <header className="position-relative d-flex justify-content-between align-items-center">
                    <div className="my-3">
                        <img
                            src={fotoPerfil}
                            className="img-responsive rounded-circle border border-dark img-fluid"
                            id="fotoPerfil"
                        />
                        {/*Nombre usuario junto a la foto de perfil*/}
                        <p className="pfoto position-relative">María Ponce</p>
                    </div>

                    <p class="m-0 p-3 rounded-3 border border-dark">Reportes del Grupo</p>
                    <img
                        className="logo"
                        src={logo500x300}
                        alt="Logo Daily Stand APP"
                    />
                </header>
                {/*salta de linea*/}
                <br />
                {/*Cuerpo*/}
                <div className="container-fluid row">
                    {/*Espacio Vacio*/}
                    <div className="col-1">

                    </div>
                    {/*Contenido Reportes*/}
                    <div className="col-9">

                        <div className="row 1">
                            {/*<!--Estructura de la tarjeta con imagen*/}
                            {/*Imagen en vertical lateral-->*/}
                            <div className="col card me-4" style={{ maxWidth: 600 }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img
                                            src={Maria}
                                            className="img-fluid rounded-start"
                                            alt="..."
                                        />
                                    </div>
                                    {/*Tarjeta de texto*/}
                                    <div className="col">
                                        <div className="card-body">
                                            <h4 className="card-title "> María Ponce</h4>
                                            <h5 className="card-text bg1 rounded-top text-center border border-dark my-0">Tareas realizadas ayer</h5>
                                            <p className="card-text border border-dark rounded-bottom">Realicé pruebas de errores</p>
                                            <h5 className="card-text bg2 rounded-top text-center border border-dark my-0">Tareas a realizar hoy</h5>
                                            <p className="card-text border border-dark rounded-bottom">Documentar y comentar el código</p>
                                            <h5 className="card-text bg3 rounded-top text-center border border-dark my-0">Posibles impedimentos</h5>
                                            <p className="card-text border border-dark rounded-bottom">Parte del codigo está obsoleta</p>
                                            <p className="card-text">
                                                <small className="text-muted">Última actualización hace 3 minutos</small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*Tarjeta 2*/}
                            {/*Imagen en vertical lateral*/}
                            <div className="col card" style={{ maxWidth: 600 }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img
                                            src={Marcelo}
                                            className="img-fluid rounded-start"
                                            alt="..."
                                        />
                                    </div>
                                    {/*Tarjeta de texto*/}
                                    <div className="col">
                                        <div className="card-body">
                                            <h4 className="card-title "> Marcelo Gómez</h4>
                                            <h5 className="card-text bg1 rounded-top text-center border border-dark my-0">Tareas realizadas ayer</h5>
                                            <p className="card-text border border-dark rounded-bottom">Realicé pruebas de errores</p>
                                            <h5 className="card-text bg2 rounded-top text-center border border-dark my-0">Tareas a realizar hoy</h5>
                                            <p className="card-text border border-dark rounded-bottom">Documentar y comentar el código</p>
                                            <h5 className="card-text bg3 rounded-top text-center border border-dark my-0">Posibles impedimentos</h5>
                                            <p className="card-text border border-dark rounded-bottom">Parte del codigo está obsoleta</p>
                                            <p className="card-text">
                                                <small className="text-muted">Última actualización hace 3 horas</small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row 2 my-4">
                            {/*<!--Estructura de la tarjeta con imagen*/}
                            {/*Imagen en vertical lateral-->*/}
                            <div className="col card me-4" style={{ maxWidth: 600 }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img
                                            src={Jose}
                                            className="img-fluid rounded-start"
                                            alt="..."
                                        />
                                    </div>
                                    {/*Tarjeta de texto*/}
                                    <div className="col">
                                        <div className="card-body">
                                            <h4 className="card-title ">José Pinto</h4>
                                            <h5 className="card-text bg1 rounded-top text-center border border-dark my-0">Tareas realizadas ayer</h5>
                                            <p className="card-text border border-dark rounded-bottom">Diseñar web</p>
                                            <h5 className="card-text bg2 rounded-top text-center border border-dark my-0">Tareas a realizar hoy</h5>
                                            <p className="card-text border border-dark rounded-bottom">Desarrollar Frontend</p>
                                            <h5 className="card-text bg3 rounded-top text-center border border-dark my-0">Posibles impedimentos</h5>
                                            <p className="card-text border border-dark rounded-bottom">Problemas con React</p>
                                            <p className="card-text">
                                                <small className="text-muted">Última actualización Ayer</small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*Tarjeta 2*/}
                            {/*Imagen en vertical lateral*/}
                            <div className="col card" style={{ maxWidth: 600 }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img
                                            src={Juan}
                                            className="img-fluid rounded-start"
                                            alt="..."
                                        />
                                    </div>
                                    {/*Tarjeta de texto*/}
                                    <div className="col">
                                        <div className="card-body">
                                            <h4 className="card-title ">Juan Carrasco</h4>
                                            <h5 className="card-text bg1 rounded-top text-center border border-dark my-0">Tareas realizadas ayer</h5>
                                            <p className="card-text border border-dark rounded-bottom">Día libre</p>
                                            <h5 className="card-text bg2 rounded-top text-center border border-dark my-0">Tareas a realizar hoy</h5>
                                            <p className="card-text border border-dark rounded-bottom">Busqueda de información solicitada</p>
                                            <h5 className="card-text bg3 rounded-top text-center border border-dark my-0">Posibles impedimentos</h5>
                                            <p className="card-text border border-dark rounded-bottom">Problemas con la base de datos</p>
                                            <p className="card-text">
                                                <small className="text-muted">Última actualización hace 5 minutos</small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>





                    </div>



                    {/*Calendario y filtro de preguntas*/}
                    <div className="col-2">
                        <br />
                        <form>
                            <input type="date" />
                        </form>
                        <select className="custom-select">
                            <option value={1}>Mostrar todo</option>
                            <option value={2}>¿Qué se hizo ayer?</option>
                            <option value={3}>¿Qué se hará hoy?</option>
                            <option value={4}>¿Qué obstáculos existen?</option>
                        </select>
                    </div>



                </div>

                {/*Boton Gestionar Grupos*/}
                <div className="container row 3">
                    <div className="col-1"></div>
                    <div className="col d-flex justify-content-start">
                        <a
                            type="button"
                            className="btn btn-primary align-middle me-4"
                            href="/MisGrupos"
                        >
                            Atrás
                        </a>
                        <a
                            type="button"
                            className="btn btn-secondary align-middle "
                            href="/ReporteDiario"
                        >
                            Reporte Diario
                        </a>
                    </div>
                </div>
            </div>
            <br></br>
        </>
    );
}

export default VistaGeneralComponent;