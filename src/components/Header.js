import React, { Component } from 'react'
// import MenuIcon from '@material-ui/icons/Menu';

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="menuIcon"><i className="fa fa-bars faIcon" aria-hidden="true"></i></div>
                {/* <MenuIcon /> */}
                <div className="header-right">
                    <a className="active" href="#home">Home</a>
                    <a className="active" href="#quotes">Quotes</a>
                    <a className="activePanel" href="#adminpanel">Admin Panel</a>
                    {/* <a className="active" href="#name">John Doe</a> */}
                    <a className="active dropdown">
                        <a className="dropbtn active" href="#name">John Doe
                         <i className="fa fa-caret-down dropBtnIcon"></i>
                        </a>
                        <div className="dropdown-content">
                            <a href="#">Profile</a>
                            <a href="#">Logout</a>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

export default Header
