import React from "react";
//importando imagen perfil
import fotoPerfil from "../img/fotoCarnet.jpg";
//importando imagen de logo
import logo500x300 from "../img/logo-500x300.png";
//importando foto digital key
import digitalKey from "../img/digital-key.png";
//importando foto search
import search from "../img/search.png";

const GestionarGruposComponent = () => {
    return (<>
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
                <p class="m-0 p-3 rounded-3 border border-dark">Gestión de Grupos</p>
                <img
                    className="logo"
                    src={logo500x300}
                    alt="Logo Daily Stand APP"
                />
            </header>
            <div className="m-4 create-group row d-flex  align-items-center">
                <div className="col border-end  border-dark">
                    <p className="font-size1 mb-1 text-center">Crear un grupo nuevo:</p>
                    <form action="" method="post">
                        <label className="form-label m-0 font-size" htmlFor="nombreGrupo">
                            Nombre grupo:
                        </label>
                        <input
                            id="nombreGrupo"
                            type="text"
                            className="form-control mb-2"
                            required=""
                            placeholder="Nombre del grupo..."
                            aria-label="Username"
                            aria-describedby="addon-wrapping"
                        />
                        <label className="form-label m-0 font-size" htmlFor="descripcionGrupo">
                            Descripción:
                        </label>
                        <input
                            id="descripcionGrupo"
                            type="text"
                            className="form-control mb-2"
                            placeholder="Descripción de este grupo de trabajo..."
                            aria-label="Username"
                            aria-describedby="addon-wrapping"
                        />
                        <div className="col d-flex align-items-center my-4 justify-content-between">
                            <input
                                className="generarKey btn btn-primary font-size"
                                type="button"
                                defaultValue="Generar Key"
                            />

                            <div className="col-9">
                                <input
                                    id="key"
                                    type="text"
                                    className=" col-8 form-control"
                                    placeholder="hgjhg6j65df2mnj2@v#"
                                    aria-label="Username"
                                    aria-describedby="addon-wrapping"
                                />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <input
                                className="btn btn-primary font-size"
                                type="submit"
                                defaultValue="Registrar"
                            />
                        </div>
                    </form>
                </div>
                <div className="col">
                    <p>Encuentra y únete a tu grupo:</p>
                    <div className="input-group flex-nowrap mb-3">
                        <span className="input-group-text" id="addon-wrapping">
                            <img className="icon" src={search} alt="" />
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                            aria-label="Username"
                            aria-describedby="addon-wrapping"
                        />
                    </div>
                    <div className="input-group flex-nowrap mb-3">
                        <span className="input-group-text" id="addon-wrapping">
                            <img className="icon" src={digitalKey} alt="" />
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ingresa la Key de grupo"
                            aria-label="Username"
                            aria-describedby="addon-wrapping"
                        />
                    </div>
                    <div className="d-flex justify-content-center">
                        <input
                            className="btn btn-primary font-size"
                            type="submit"
                            defaultValue="Registrar"
                        />
                    </div>
                </div>
            </div>

            <footer className="botonAtras">
                <a type="button" class="btn btn-primary col align-middle " href="/MisGrupos">Atrás</a>
            </footer>

        </div>
    </>);
}

export default GestionarGruposComponent;