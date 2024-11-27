import styled from 'styled-components';

const Wrapper = styled.section`
  /* Remove extra space from the top of the page */
  margin-top: 0;

  /* Hero Image Styling */
  .hero-image {
    margin-top: 0;
  }

  .hero-image img {
    width: 100%;
    height: auto;
    display: block;
  }

  /* Image Cards Grid */
  .image-cards {
    display: grid;
    gap: 1.5rem;
    justify-items: center;
    margin-top: 2rem; /* Space between the hero image and cards */
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive grid */
  }

  .image-card {
    display: block;
    width: 100%;
    max-width: 300px; /* Maximum width for each card */
    text-align: center;
    position: relative;
    overflow: hidden; /* Ensures the images fit inside the cards */
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for hover */
    background-color: #fff;
  }

  .image-card:hover {
    transform: scale(1.05); /* Slight zoom effect on hover */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Elevated shadow effect on hover */
  }

  .image-card img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    transition: opacity 0.3s ease;
  }

  .card-text {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
    background: rgba(0, 0, 0, 0.5); /* Dark background for readability */
    padding: 10px;
    text-align: center;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .image-cards {
      grid-template-columns: 1fr; /* Stacks cards vertically on smaller screens */
    }
  }

  @media (min-width: 768px) {
    .image-cards {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Multi-column grid on medium and larger screens */
    }
  }
`;

export default Wrapper;
