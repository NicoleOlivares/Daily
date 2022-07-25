import React from "react";
//importando foto logo
import logo500x300 from "../img/logo-500x300.png";
//importando foto perfil
import fotoPerfil from "../img/fotoCarnet.jpg";

const ReporteDiarioComponent = () => {
    return (<>
        {/*Contener de la pagina*/}
        <div className="container-fluid">
            <header className="d-flex justify-content-between align-items-center">
                <div className="my-3">
                    <img
                        src={fotoPerfil}
                        className="img-responsive rounded-circle border border-dark img-fluid"
                        id="fotoPerfil"
                    />
                    {/*Nombre usuario junto a la foto de perfil*/}
                    <p className="pfoto position-relative">María Ponce</p>
                </div>

                <p class="m-0 p-3 rounded-3 border border-dark">Reporte Diario</p>
                <img
                    className="logo"
                    src={logo500x300}
                    alt="Logo Daily Stand APP"
                />
            </header>
            {/*salta de linea*/}
            <br />
            {/*Cuerpo*/}
        </div>

        {/*Cuerpo*/}
        <div className="container-fluid row">
            {/*Espacio Vacio*/}
            <div className="col-2">

            </div>

            {/*Contenido Reportes*/}
            <div className="col-8">
                <>
                    {/*cuarta fila*/}
                    <div className="row text-center justify-content-center">
                        <div className="pregunta1 w-75 rounded-top">¿Qué hiciste ayer?</div>
                        {/* Textarea with class .w-50 */}
                        <div className="form-outline w-75 p-0 mb-3">
                            <textarea
                                className="form-control"
                                id="textAreaExample5"
                                rows={3}
                                placeholder="Ayer hice..."
                                defaultValue={""}
                            />
                        </div>
                    </div>
                    {/*quinta fila*/}
                    <div className="row text-center justify-content-center">
                        <p className="pregunta2 w-75 rounded-top">¿Qué harás hoy?</p>
                        {/* Textarea with class .w-50 */}
                        <div className="form-outline w-75 p-0 mb-3">
                            <textarea
                                className="form-control"
                                id="textAreaExample5"
                                rows={3}
                                placeholder="Hoy haré..."
                                defaultValue={""}
                            />
                        </div>
                    </div>
                    {/*sexto fila*/}
                    <div className="row text-center justify-content-center">
                        <p className="pregunta3 w-75 rounded-top">¿Hay algo que te impida avanzar?</p>
                        {/* Textarea with class .w-50 */}
                        <div className="form-outline w-75 p-0 mb-3">
                            <textarea
                                className="form-control"
                                id="textAreaExample5"
                                rows={3}
                                placeholder="Lo que me impide avanzar es..."
                                defaultValue={""}
                            />
                        </div>
                        {/*salto de linea*/}
                        <br />
                        {/*Boton Publicar*/}
                        <div class="">
                            <a type="button" class="btn btn-primary mx-3 col align-middle " href="/MisGrupos">Atrás</a>
                            <button type="submit" class="btn btn-secondary mx-3 col">Publicar</button>

                        </div>
                    </div>
                    <br />
                </>

            </div>

            {/*Espacio calendario*/}
            <div className="col-2">
                <form>
                    <input type="date" />
                </form>
            </div>

        </div>
    </>);
}

export default ReporteDiarioComponent;