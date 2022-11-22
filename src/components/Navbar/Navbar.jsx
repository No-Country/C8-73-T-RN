import React from 'react'
import '../../styles/components/navbar/_Navbar.scss'
const Navbar = () => {
    return (
        <nav>
            <ul class="navigation">
                <li> <a href="#"> Home</a></li>
                <li> <a href="#"> Quienes Somos</a></li>
                <li> <a href="#"> Juegos</a></li>
                <li> <a href="#"> Torneo</a></li>
                <div class="buttons">
                    <a class="btn-main" href="#"> Iniciar Sesión </a>
                </div>
            </ul>


        </nav>
    )
}

export default Navbar