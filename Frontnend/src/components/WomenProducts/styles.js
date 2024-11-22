import styled from 'styled-components';

const Wrapper = styled.section`
    background-color: url("../../assets/backgroundimf.png");

  .featured {
    display: grid;
    gap: 1.5rem;
    img {
      height: 300px;
      border: solid 5px rgb(255 178 225);
      align-item:center;
    }
  }
  .btn {
    display: block;
    width: 248px;
    margin: 0 auto;
    text-align: center;
    color: rgb(255 178 225);
    font-weight: bold;
    border: solid 2px rgb(255 178 225);
    background-color: white;

    
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }

  
`;

export default Wrapper;
