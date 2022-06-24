import React, { Component, Fragment } from 'react'
import "./Navbar.css"

export class Navbar extends Component {
    render() {
        return (
            <Fragment>
                <div className='navbar'>
                    <div className='col-12 col-md-4'>
                        <div className='navbar-1'>
                            FAZZNITURE
                        </div>
                    </div>
                    <div className='navbar-2 col-12 col-md-4'>
                        <div className='navbar-2-content'>Home</div>
                        <div className='navbar-2-content'>Pages</div>
                        <div className='navbar-2-content'>Shop</div>
                        <div className='navbar-2-content'>Blog</div>
                    </div>
                    <div className='navbar-3 col-12 col-md-4'>
                        <div><img src={require("../../assets/vector/Vector-Search.png")} alt="Search" className="navbar-3-logo"/></div>
                        <div><img src={require("../../assets/vector/Vector-Love.png")} alt="Love" className="navbar-3-logo"/></div>
                        <div><img src={require("../../assets/vector/Vector-Cart.png")} alt="Cart" className="navbar-3-logo"/></div>
                        <div><img src={require("../../assets/vector/Vector-Drop.png")} alt="Drop" className="navbar-3-logo"/></div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Navbar