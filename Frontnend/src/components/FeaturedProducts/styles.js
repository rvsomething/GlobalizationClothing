import styled from 'styled-components';

const Wrapper = styled.section`
  .featured {
    display: grid;
    gap: 1.5rem;
    img {
      height: 500px;
      border: solid 5px rgb(0, 255, 72);
      align-item:center;
    }
  }
  .btn {
    display: block;
    width: 248px;
    margin: 0 auto;
    text-align: center;
    color: #000000;
    background-color: #fffff;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default Wrapper;
