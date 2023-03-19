import React from 'react'
import Rlogo from '../Assets/RB-logo.png'
import { Outlet, Link } from 'react-router-dom'
// import Footer from './Footer'

function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg fixed-top primary-bg navbar-light">
                <div class="container">
                    <Link class="navbar-brand" to='/'
                    ><img
                            id="RB-logo"
                            src={Rlogo}
                            alt="MDB Logo"
                            draggable="false"
                            height="60"
                        /></Link>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto align-items-center">
                            <li class="nav-item">
                                <Link class="nav-link mx-2 text-white fs-18px" to='/'>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link mx-2 text-white fs-18px" to='/build'>Build</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link mx-2 text-white fs-18px" to='/'>Sample</Link>
                            </li>
                            {/* <li class="nav-item ms-3">
                                <a class="btn btn-black btn-rounded" href="#!">Sign in</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='' id="detail">
                <Outlet />
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Header