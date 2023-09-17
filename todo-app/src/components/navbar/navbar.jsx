import React from 'react'

const navbar = () => {
    return (
        <div className='container shadow-lg'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand  text-info fs-3 fw-bold" href="/">My Todo-s</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-lg-flex justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav ">
                            <li className="nav-item mx-3">
                                <a className="nav-link active text-secondary fs-5 fw-bold" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link fs-5 text-secondary fw-bold" href="/">Features</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link fs-5 text-secondary fw-bold" href="/">Pricing</a>
                            </li>
                            <li className="nav-item dropdown mx-3">
                                <a className="nav-link fs-5 text-secondary fw-bold dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown link
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default navbar
