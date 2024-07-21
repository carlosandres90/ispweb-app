import React from 'react';
import Logo from '../assest/logo.png';
import '../styles/header01.css'

import { Link } from "react-router-dom";

function Header(){
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
                            <Link to={`/`}>
                                INICIO
                            </Link>
                        </li>
                        <li>
                            <Link to={`/`}>
                                CLIENTES
                            </Link>
                            <ul>
                                <li>
                                    <Link to={`/`}>
                                        CREAR
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`/`}>
                                        CONSULTAR
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to={`/`}>
                                USUARIOS
                            </Link>
                            <ul>
                                <li>
                                    <Link to={`/`}>
                                        CREAR
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`/`}>
                                        ACTUALIZAR
                                    </Link>
                                </li>
                            </ul>
                        </li> 
                        <li>
                            <Link to={`/`}>
                                PAGOS
                            </Link>
                            <ul>
                                <li>
                                    <Link to={`/`}>
                                        REGISTRAR
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`/`}>
                                        CONSULTAR
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to={`/`}>
                                REPORTES
                            </Link>
                            <ul>
                                <li>
                                    <Link to={`/`}>
                                        POR MES
                                    </Link>
                                </li>
                            </ul>
                        </li> 
                        <li>
                            <Link to={`/`}>
                                PLAN
                            </Link>
                            <ul>
                                <li>
                                    <Link to={`/`}>
                                        CREAR
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`/`}>
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