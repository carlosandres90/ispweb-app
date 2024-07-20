import React from 'react';
import NavBar from './NavBar';

function Header(){
    return (
        <div className='menu'>
            <NavBar />
            <section id="inicio">
                <h2>Inicio</h2>
                <p>Esto es el inicio</p>
            </section>
            <section id="clientes">
                <h2>Clientes</h2>
                <p>Esto es para los clientes</p>
            </section>
        </div>
    );
}

export default Header;