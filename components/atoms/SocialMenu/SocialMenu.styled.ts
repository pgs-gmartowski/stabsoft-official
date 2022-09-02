import styled from 'styled-components';

const SocialMenuStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 150px;
  
  a {
    color: ${props => props.theme.color}
    text-decoration: none;
    transition: color 400ms;
    transition-timing-function: ease-in-out;
  }
  
  a:hover {
    color: ${props => props.theme.lead};
  }
`;

export default SocialMenuStyled;
