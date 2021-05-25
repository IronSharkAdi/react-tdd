import React from 'react'

function Header() {
    return (
        <div className="py-3 border-bottom navbar navbar-expand navbar-light">
            <a href="/"  className="navbar-brand"><img data-testid="logo" style={{width:"50px"}} src="https://ironshark.gq/img/logo3.png" alt="ironsharklogo" /></a>
            <form data-testid="search" className="mr-auto w-50  form-inline" >
                <input type="text" className="w-50 form-control" placeholder="search homes"/>
            </form>
            <div className="ml-auto text-upparcase navbar-nav" data-testid="nav-link"  >
                    <a href="/" className="nav-link">Become a host</a>
                    <a href="/" className="nav-link">Help</a>
                    <a href="/" className="nav-link">Sign up</a>
                    <a href="/" className="nav-link">Login</a>  
            </div>
        </div>
    )
}

export default Header
