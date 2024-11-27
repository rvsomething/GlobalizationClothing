import styled from 'styled-components';

const Wrapper = styled.section`
  .featured {
    display: grid;
    gap: 1.5rem;
    justify-items: center; /* Center the images */
    text-align: center;  /* Center the text below the images */
  }

  .title {
    text-align: left;
  }

  .circular-image {
    border-radius: 50%;
    width: 100%; /* Full width of the parent container */
    height: 250px; /* Maintain aspect ratio */
    max-width: 250px; /* Limit size for larger screens */
  }

  .image-text {
    margin-top: 1rem; /* Space between the image and text */
    font-size: 1.2rem;
    font-weight: bold;
    color: black;
  }

  .btn {
    display: block;
    width: 200px;
    margin: 20px auto;
    text-align: center;
    color: black;
    font-weight: bold;
    border: solid 2px black;
    background-color: white;
    padding: 10px;
    text-decoration: none;
  }

  .image-link {
    display: block;
    width: 100%;
    text-align: center;  /* Center the images within the link */
  }

  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Adjust for better layout on mobile and desktop */
    }
  }

  @media (min-width: 1024px) {
    .btn {
      width: 250px;  /* Button size for larger screens */
    }
  }
`;

export default Wrapper;
