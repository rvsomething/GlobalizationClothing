import styled from 'styled-components';

const Wrapper = styled.section`

.splitted-navigation-container {
  position: absolute; /* If overlaying the carousel */
  bottom: 0; /* Aligns at the bottom of the carousel */
  width: 100%;
  display: flex;
  height: 500px; /* Adjust height as needed */
  z-index: 10; /* Places it above carousel images */
}

.splitted-navigation-container a {
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  color: white;
  text-align: center;
  line-height: 50px; /* Match height */
  text-decoration: none;
  font-weight: bold;
}

.splitted-navigation-container a:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

  .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
    text-align: center;
    gap: 4rem 2rem;
  }
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(90vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 80%;
      background: var(--clr-primary-1);
      bottom: -5%;
      right: -8%;
      border-radius: var(--radius);
    }
  }
`;

export default Wrapper;
