import React, { useState } from 'react';
import logomobile from '../../assets/logomobile.png';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../../context/products_context';
import { FaTimes } from 'react-icons/fa';
import { links } from '../../utils/constants';
import SidebarContainer from './styles';
import CartButtons from '../CartButtons/';
import { useUserContext } from '../../context/user_context';

const Sidebar = () => {
  const { currentUser } = useUserContext();
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className="sidebar-header">
          <img src={logomobile} alt="Globalization Clothing" />
          <button type="button" className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map((link) => {
            const { text, url, id, submenu } = link;
            return (
              <li key={id}>
                <div
                  className={`link ${submenu ? 'has-dropdown' : ''}`}
                  onClick={() => submenu && handleDropdown(id)}
                >
                  <Link to={url} onClick={closeSidebar}>
                    {text}
                  </Link>
                  {submenu && <span className="dropdown-toggle">▼</span>}
                </div>
                {submenu && activeDropdown === id && (
                  <ul className="dropdown">
                    {submenu.map((sublink) => (
                      <li key={sublink.id}>
                        <Link to={sublink.url} onClick={closeSidebar}>
                          {sublink.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
          {currentUser && (
            <>
              <li>
                <Link to="/checkout" onClick={closeSidebar}>
                  checkout
                </Link>
              </li>
              <li>
                <Link to="/orders" onClick={closeSidebar}>
                  orders
                </Link>
              </li>
            </>
          )}
        </ul>
        <CartButtons />
      </aside>
    </SidebarContainer>
  );
};

export default Sidebar;
