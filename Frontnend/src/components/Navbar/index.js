import React, { useState } from 'react';
import NavContainer from './styles';
import logo from '../../assets/logo.png';
import { FaBars, FaCaretDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { links } from '../../utils/constants';
import CartButtons from '../CartButtons/';
import { useProductsContext } from '../../context/products_context';
import { useUserContext } from '../../context/user_context';

const Nav = () => {
  const { currentUser } = useUserContext();
  const { openSidebar } = useProductsContext();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url, submenu } = link;
            return (
              <li key={id} className="nav-item">
                <div
                  className={`nav-link ${submenu ? 'has-dropdown' : ''}`}
                  onClick={() => submenu && handleDropdown(id)}
                >
                  <Link to={url}>
                    {text}
                    {submenu && <FaCaretDown className="dropdown-icon" />}
                  </Link>
                </div>
                {submenu && activeDropdown === id && (
                  <ul className="dropdown">
                    {submenu.map((sublink) => (
                      <li key={sublink.id}>
                        <Link to={sublink.url}>{sublink.text}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
          {currentUser && (
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
          )}
          {currentUser && (
            <li>
              <Link to="/orders">Orders</Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
};

export default Nav;
