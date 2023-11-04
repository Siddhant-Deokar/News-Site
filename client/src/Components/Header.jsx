import React from 'react'
// import MenuIcon from '@mui/icons-material/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

export const Header = () => {
    return (

        <div>
            <nav className="navbar navbar-light bg-dark col-sm-12 px-3">
                <Icon.List color='white' size={40}/>
                <a className="navbar-brand  px-3 text-white py-2 fs-1 mx-auto   " href="/" >

                <img src="https://www.freepnglogos.com/uploads/yellow-black-batman-logo-png-2.png" style={{ height: '70px' }} alt="Gotham Newz"  />Gotham Newz
                </a>
            </nav>
        </div>

    )
}
