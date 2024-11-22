import styled from 'styled-components';

const SidebarContainer = styled.div`
  text-align: center;

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;

    img {
      width: 200px;
    }
  }

  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-red-dark);
    transition: var(--transition);
    cursor: pointer;
  }

  .close-btn:hover {
    color: var(--clr-red-light);
  }

  .links {
    margin-bottom: 2rem;
  }

  .link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-3);
    cursor: pointer;
    transition: var(--transition);
  }

  .link:hover {
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }

  .dropdown-toggle {
    background: transparent;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    color: var(--clr-grey-3);
  }

  .dropdown-toggle:hover {
    color: var(--clr-primary-5);
  }

  .dropdown {
    display: none;
    margin-left: 1.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    padding: 0.5rem 0;
  }

  .dropdown li {
    padding: 0.5rem 1.5rem;
  }

  .dropdown li a {
    color: var(--clr-grey-3);
    font-size: 0.9rem;
    transition: var(--transition);
    text-transform: capitalize;
  }

  .dropdown li a:hover {
    color: var(--clr-white);
    background: var(--clr-primary-5);
    padding-left: 1.5rem;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translateX(-100%);
    z-index: -1;
  }

  .show-sidebar {
    transform: translateX(0);
    z-index: 999;
  }

  /* Ensure dropdown is visible when active */
  .links .link.active + .dropdown {
    display: block;
  }

  .cart-btn-wrapper {
    margin: 2rem auto;
  }

  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default SidebarContainer;
