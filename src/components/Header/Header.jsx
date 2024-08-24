import React from 'react';
import { NavLink, Link } from 'react-router-dom';

//style import 
import Style from './Header.module.css';

export const Header = () => {
  return (
    <header className={Style.header}>
        <Link to='/' className={Style.logo}>
          <h1>Lipp</h1>
        </Link>

        <div>    
          <NavLink to='/' className={Style.options}>Página Principal</NavLink>
          <NavLink to={"/new-product"} className={Style.options}>novo produto</NavLink>
          <NavLink to={"/Products"} className={Style.options}>Produtos</NavLink>
        </div>
    </header>
  )
}
