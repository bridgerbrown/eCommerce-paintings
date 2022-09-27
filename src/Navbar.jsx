import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
    return(
        <nav>
            <div className='Top-Nav'>
                <span></span>
                <h1>eCommerce Paintings</h1>
                <button>Cart</button>
            </div>
            <div className='Bottom-Nav'>
                <ul>
                    <Link to="/shop">
                        <li>Shop</li>
                    </Link>
                    <Link to="/favorites">
                        <li>Favorites</li>
                    </Link>
                    <Link to="/checkout">
                        <li>Checkout</li>
                    </Link>
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar