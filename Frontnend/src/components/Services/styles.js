import styled from 'styled-components';

const Wrapper = styled.section`
  h3,
  h2 {
      text-align: center;
    align-items: center;
  color: rgb(0, 255, 72);
  font-family: "Playfair Display", Vidaloka, serif;
  font-size: 5rem;
  line-height: 0.85;
  perspective: 500px;
  }
  padding: 5rem 0;
  border: solid 5px rgb(0, 255, 72);
  p {
    margin-bottom: 0;
  font-size: 1.2rem;
    line-height: 1.8;
    color: #000;
  }
  .header h3 {
    margin-bottom: 2rem;
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: rgb(1, 145, 42);
    // rgb(0, 255, 72);
    text-align: center;
    padding: 2.5rem 2rem;
    border: solid 5px #fff;
    border-radius: 15px;
    h4{color:#fff;}
    p {
      color: #000;
      text-align: justify:
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: #fff;
    color: var(--clr-primary-1);
    svg {
      font-size: 3rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }

  /* RollingText.css */
.roller {
    position: relative;
    height: 7rem; /* Adjust based on your text height */
    overflow: hidden;
    font-size: 2rem; /* Adjust based on your preference */
}

#rolltext {
    position: absolute;
    top: 0;
    animation: slide 5s infinite;
}

@keyframes slide {
    0% {
        top: 0;
    }
    50% {
        top: -8rem; /* Adjust based on your text height */
    }
    100% {
        top: 0;
    }
}

`;

export default Wrapper;
