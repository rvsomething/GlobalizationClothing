import styled from 'styled-components';

const Wrapper = styled.section`
  background: var(--clr-primary-3);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  color: var(--clr-primary-10);
  a { 
    color: var(--clr-primary-10);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    text-decoration: underline;
  }
`;

export default Wrapper;
