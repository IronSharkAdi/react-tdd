import React from 'react'

function Header() {
    return (
        <div>
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
        <div className="border-bottom container mw-100 container-fluid py-2   px-4">
            <button type="button" data-testid="home-type" class="btn btn-outline-secondary text-nowrap mr-4 py-1">Home type</button>
            <button type="button" data-testid="dates" class="btn btn-outline-secondary text-nowrap mr-4 py-1">Dates</button>
            <button type="button" data-testid="quests" class="btn btn-outline-secondary text-nowrap mr-4 py-1">Guests</button>
            <button type="button" data-testid="guests" class="btn btn-outline-secondary text-nowrap mr-4 py-1">Quests</button>
            <button type="button" data-testid="price" class="btn btn-outline-secondary text-nowrap mr-4 py-1">Price</button>
            <button type="button" data-testid="rooms" class="btn btn-outline-secondary text-nowrap mr-4 py-1">Rooms</button>
            <button type="button" data-testid="amities" class="btn btn-outline-secondary text-nowrap mr-4 py-1">Amities</button>

        </div>
        </div>
    )
}

export default Header
