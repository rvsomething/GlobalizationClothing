import styled from 'styled-components';

const Wrapper = styled.section`
    background-color: url("../../assets/backgroundimf.png");

  .featured {
    display: grid;
    gap: 1.5rem;
    img {
      height: 300px;
      border: solid 5px rgb(239 219 95);
      align-item:center;
    }
  }
  .btn {
    display: block;
    width: 248px;
    margin: 0 auto;
    text-align: center;
    color: rgb(239 219 95);
    font-weight: bold;
    border: solid 2px rgb(239 219 95);
    background-color: white;

    
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default Wrapper;
