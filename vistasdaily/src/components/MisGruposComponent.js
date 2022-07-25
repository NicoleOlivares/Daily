import React from "react";
//importando imagen perfil
import fotoPerfil from "../img/fotoCarnet.jpg";
//importando imagen de logo
import logo500x300 from "../img/logo-500x300.png";

const MisGruposComponent = () => {
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
                    {/*Hora*/}
                    <div
                        className="mx-auto p-1"
                        style={{
                            width: 200,
                            textAlign: "center",
                            borderRadius: 5,
                            backgroundColor: "rgba(0, 0, 0, 0.10)"
                        }}
                    >  <h2>Mis Grupos</h2>
                        {/*Aqui va el reloj que no funciona*/}
                        {/*Título tabla*/}
                    </div>
                    {/*Fin código hora*/}
                    <img
                        className="logo"
                        src={logo500x300}
                        alt="Logo Daily Stand APP"
                    />
                </header>
                {/*salta de linea*/}
                <br />
                {/*cuarta fila*/}
                <div className="tabla">
                    {/*Tabla Grupos*/}
                    <table className="table table-striped">
                        {/*cabecera, titulos de la tabla*/}
                        <thead className="bg-info">
                            {/*Genera filas*/}
                            <tr>
                                <th>Sprint</th>
                                <th>Nombre de sprint</th>
                                <th>Descripción</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        {/*contenido de la tabla*/}
                        <tbody>
                            <tr>
                                <td>1</td>
                                {/*registro tr*/}
                                <td>DailyStandApp</td>
                                {/*dato*/}
                                <td>DailyStandApp: "Has tu reporte diario"</td>
                                <td>
                                    <a
                                        type="button"
                                        className="btn btn-outline-primary align-middle "
                                        href="/VistaGeneral"
                                    >
                                        Ver Grupo
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>One2All</td>
                                <td>Tu marcador de páginas universal y digital</td>
                                <td>
                                    <a
                                        type="button"
                                        className="btn btn-outline-primary align-middle "
                                        href="/VistaGeneral"
                                    >
                                        Ver Grupo
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Agendamigo</td>
                                <td>Un amigo para tu agenda</td>
                                <td>
                                    <a
                                        type="button"
                                        className="btn btn-outline-primary align-middle "
                                        href="/VistaGeneral"
                                    >
                                        Ver Grupo
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Semillita</td>
                                <td>Aprende a programar jugando</td>
                                <td>
                                    <a
                                        type="button"
                                        className="btn btn-outline-primary align-middle "
                                        href="/VistaGeneral"
                                    >
                                        Ver Grupo
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Marikeiks</td>
                                <td>Página para tomar pedidos de Repostería</td>
                                <td>
                                    <a
                                        type="button"
                                        className="btn btn-outline-primary align-middle "
                                        href="/VistaGeneral"
                                    >
                                        Ver Grupo
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>EcoTank</td>
                                <td>Plantas y mediciones</td>
                                <td>
                                    <a
                                        type="button"
                                        className="btn btn-outline-primary align-middle "
                                        href="/VistaGeneral"
                                    >
                                        Ver Grupo
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {/*salto de linea*/}
                    <br />
                    {/*Boton Gestionar Grupos*/}
                    <div className="d-flex justify-content-between">
                        <a
                            type="button"
                            className="btn btn-primary align-middle "
                            href="/PerfilUsuario"
                        >
                            Atrás
                        </a>
                        <a
                            type="button"
                            className="btn btn-secondary align-middle "
                            href="/GestionarGrupos"
                        >
                            Gestionar Grupos
                        </a>
                    </div>
                </div>
                {/*Final tabla*/}
            </div>
        </>

    );
}

export default MisGruposComponent;