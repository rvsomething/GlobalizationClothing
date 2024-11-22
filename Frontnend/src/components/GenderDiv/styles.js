import styled from 'styled-components';

const Wrapper = styled.section`
  background: var(--clr-primary-4);
  width: 100%;
  min-height: 5vh;
  display: flex;
  padding: 0.5rem;
  align-items: left;
  

  color: var(--clr-primary-4);
  a { 
    color: white;
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    text-decoration: underline;
  }
`;

export default Wrapper;
