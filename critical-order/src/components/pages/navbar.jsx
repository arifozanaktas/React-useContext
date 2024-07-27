import { Link, Stack, Typography } from '@mui/material';
import React, { useContext} from 'react';
import { FavoritesContext } from '../context/OrdersContext';

function Navbar() {

  const { favorites } = useContext(FavoritesContext)


  return (<>
   
    <nav className="navbar">
        
      <div className="navbar-container">
        <a href="#" className="navbar-logo">Logo</a>
        <button className="menu-icon">
          ☰
        </button>
        <Stack>
        <ul className={`nav-menu`}>
          <li className="nav-item">
            <Link className="nav-links"  style={{ color: "white", textDecoration: "none" }} to="/List">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-links" style={{ color: "white", textDecoration: "none" }} to="/criticalOrderList">Critical Orders<span style={{color:"red",fontSize:"12px"}}>({favorites.length})</span></Link>
          </li>
        </ul>
        </Stack>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
