import styled from 'styled-components';

const FooterStyled = styled.footer`
  display: flex;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  color: ${props => props.theme.font};
`;

const FooterCopyrightStyled = styled.span`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  font-size: 10px;
  padding: 0 20px 20px 0;
`;

export {FooterCopyrightStyled};
export default FooterStyled;
