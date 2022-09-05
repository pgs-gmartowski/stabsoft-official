import styled from 'styled-components'

const HeadingStyled = styled.header`
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
  height: 200px;
  align-items: center;

  div#tsparticles {
    position: absolute;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Goldman', cursive;
  }

  h1 {
    font-size: 40px;
    margin: 5px 0;
  }
  
  @media only screen and (max-width: 480px) {
    h1 {
      font-size: 30px;
    }
  }
`;

export {HeadingStyled};
