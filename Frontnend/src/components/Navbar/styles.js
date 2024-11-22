import styled from 'styled-components';

const NavContainer = styled.nav`
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }

  .nav-links {
    display: none;
    font-weight: bold;
    color: black
  }

  .cart-btn-wrapper {
    display: none;
  }

  /* Dropdown and Link Styles */
  .nav-item {
    position: relative;
    display: flex;
    align-items: center; /* Ensures vertical alignment */
  }

  .has-dropdown {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
  }

  .dropdown-icon {
    margin-left: 5px;
    font-size: 0.8rem;
    color: var(--clr-grey-5);
    transition: color 0.3s ease;
  }

  .has-dropdown:hover .dropdown-icon {
    color: var(--clr-primary-7);
  }

  .dropdown {
    position: absolute;
    top: 2.5rem;
    left: 0;
    background: var(--clr-white);
    box-shadow: var(--dark-shadow);
    padding: 0.5rem 0;
    list-style-type: none;
    display: none; /* Hidden by default */
    z-index: 10;
    border-radius: var(--radius);
  }

  .nav-item:hover .dropdown {
    display: block; /* Display dropdown on hover */
  }

  .dropdown li {
    text-align: left;
  }

  .dropdown a {
    display: block;
    color: black;
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
    text-transform: capitalize;
    transition: all 0.3s linear;
  }

  .dropdown a:hover {
    background: var(--clr-primary-5);
    color: var(--clr-white);
    padding-left: 1.5rem;
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none; /* Hide toggle button on desktop */
    }

    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }

    .nav-links {
      display: flex;
      justify-content: center;
      align-items: center; /* Ensures vertical alignment */
      li {
        margin: 0 0.5rem;
      }

      a {
        color: black;
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }

    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default NavContainer;
