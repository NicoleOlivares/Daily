import React from 'react';
import './css/Inicio.css';
import './css/Perfil-Usuario.css';
import './css/RecuperacionCuenta.css';
import './css/MisGrupos.css';
import './css/GestionGrupo.css';
import './css/VistaGeneral.css';
import './css/ReporteDiario.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import RegistroComponent from './components/RegistroComponent';
import RecuperacionContraseñaComponent from './components/RecuperacionContraseñaComponent';
import MisGruposComponent from './components/MisGruposComponent';
import PerfilComponent from './components/PerfilComponent';
import GestionarGruposComponent from './components/GestionarGruposComponent';
import VistaGeneralComponent from './components/VistaGeneralComponent';
import ReporteDiarioComponent from './components/ReporteDiarioComponent';


//para que se muestren ambas etiquetas agregamos un div
const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<LoginComponent/>}></Route>
            <Route path='/Registro' element={<RegistroComponent/>}></Route>
            <Route path='/RecuperacionCuenta' element={<RecuperacionContraseñaComponent/>}></Route>
            <Route path='/MisGrupos' element={<MisGruposComponent/>}></Route>
            <Route path='/PerfilUsuario' element={<PerfilComponent/>}></Route>
            <Route path='/GestionarGrupos' element={<GestionarGruposComponent/>}></Route>
            <Route path='/VistaGeneral' element={<VistaGeneralComponent/>}></Route>
            <Route path='/ReporteDiario' element={<ReporteDiarioComponent/>}></Route>


            
        </Routes>
        </BrowserRouter>
    );

};

export default App;

