import React from 'react';
import './css/App.css';
import './css/Perfil-Usuario.css';
import './css/RecuperacionCuenta.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import RegistroComponent from './components/RegistroComponent';
import RecuperacionContraseñaComponent from './components/RecuperacionContraseñaComponent';


//para que se muestren ambas etiquetas agregamos un div
const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<LoginComponent/>}></Route>
            <Route path='/Registro' element={<RegistroComponent/>}></Route>
            <Route path='/RecuperacionCuenta' element={<RecuperacionContraseñaComponent/>}></Route>
        </Routes>
        </BrowserRouter>
    );

};

export default App;