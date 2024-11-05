import styled from 'styled-components';

const Wrapper = styled.footer`
  background: var(--clr-black);
  color: var(--clr-grey-6);
  padding: 2rem 0;
  text-align: center;

  /* Top Level Layout */
  .footer-top {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: space-around;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--clr-grey-7);
  }

  .footer-section {
    flex: 1;
    min-width: 200px;
    text-align: left;
  }

  .logo .footer-logo {
    max-width: 250px;

  }

  .about, .customer-service {
    h4 {
      color: var(--clr-primary-5);
      margin-bottom: 0.5rem;
    }
    p {
      margin: 0.5rem 0;
    }
    a {
      color: var(--clr-grey-6);
      text-decoration: none;
      display: block;
      margin: 0.2rem 0;
    }
    a:hover {
      color: var(--clr-primary-5);
    }
  }

  .map iframe {
    width: 100%;
    height: 100px;
    border-radius: 8px;
  }

  /* Bottom Level Social Links */
  .footer-bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding-top: 1.5rem;

    .footer-social {
      display: flex;
      gap: 1rem;
      svg {
        color: var(--clr-grey-6);
        font-size: 1.5rem;
      }
      svg:hover {
        color: var(--clr-primary-5);
      }
    }

    p {
      margin: 0;
      font-size: 0.875rem;
    }
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    .footer-top {
      flex-direction: column;
      align-items: center;
    }
    .footer-section {
      text-align: center;
    }
    .map iframe {
      height: 150px;
    }
  }
`;

export default Wrapper;
