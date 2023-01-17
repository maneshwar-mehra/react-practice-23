import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.about}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.contact}</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

// proptypes
/* .isRequired will check that the prop should be empty, value should have to be there
    if there is no value then it checks the default props value
    if defalut props also do not have value then it will throw error
*/
Navbar.propTypes = {
    about: PropTypes.string,
    contact: PropTypes.string.isRequired
}

// default props, if any of the value is not passed then this value will be passed
Navbar.defaultProps = {
    about: "About"
}