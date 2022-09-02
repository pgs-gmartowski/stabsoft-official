import {createGlobalStyle} from 'styled-components';

const theme = {
  lead: 'rgb(232,98,43)',
  background: '#fff',
  font: '#000',
};

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: 'Sora', sans-serif;
    background: ${props => props.theme.background};
  }

  html, body, #__next {
    height: 100%;
    width: 100%;
  }
  
  a {
    color: inherit;
  }
`;

export {GlobalStyle};
export default theme;
