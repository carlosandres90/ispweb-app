import React from 'react';
import Logo from '../assest/logo.png';
import '../styles/header01.css';
import { Link } from "react-router-dom";



const Header = () => {

    return (
        <header className='headers'>
            <div className='headers_header'>
                <nav className='dropdownmenu'>
                    <ul>
                        <li >
                            <img className='logo' src={Logo} alt="ispweblogo"/>
                        </li>
                        <li>
                            ISPWEB
                        </li>
                        <li>
                            <Link to={`/principal`}>
                                INICIO
                            </Link>
                        </li>
                        <li>
                            <Link to={`/clientes-crear`} >
                                CLIENTES
                            </Link>
                            <ul>
                                <li>
                                    <Link to={`/clientes-crear`}>
                                        CREAR
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`/clientes-consultar`}>
                                        CONSULTAR
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to={`/usuarios-crear`}>
                                USUARIOS
                            </Link>
                            <ul>
                                <li>
                                    <Link to={`/usuarios-crear`}>
                                        CREAR
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`/usuarios-actualizar`}>
                                        ACTUALIZAR
                                    </Link>
                                </li>
                            </ul>
                        </li> 
                        <li>
                            <Link to={`/pago-registrar`}>
                                PAGOS
                            </Link>
                            <ul>
                                <li>
                                    <Link to={`/pago-registrar`}>
                                        REGISTRAR
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`/pago-consultar`}>
                                        CONSULTAR
                                    </Link>
                                </li>
                            </ul>
                        </li> 
                        <li>
                            <Link to={`/plan-crear`}>
                                PLAN
                            </Link>
                            <ul>
                                <li>
                                    <Link to={`/plan-crear`}>
                                        CREAR
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`/plan-actualizar`}>
                                        ACTUALIZAR
                                    </Link>
                                </li>
                            </ul>
                        </li>                      
                    </ul>
                    
                </nav>
            </div>
        </header>
    );
}

export default Header;