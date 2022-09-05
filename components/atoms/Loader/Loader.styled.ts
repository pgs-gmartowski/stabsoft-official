import styled from 'styled-components';

/**
 * Coffee
 *
 * @author jh3y - jheytompkins.com
 */

const LoaderStyled = styled.div`
  @-webkit-keyframes coffee {
    100% {
      opacity: 0;
      -webkit-transform: translateY(-200%);
      transform: translateY(-200%);
    }
  }
  @keyframes coffee {
    100% {
      opacity: 0;
      -webkit-transform: translateY(-200%);
      transform: translateY(-200%);
    }
  }
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.background};
  z-index: 1;
`;

const Cup = styled.div`
  background: ${props => props.theme.lead};
  display: grid;
  border-radius: 4px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  height: 40px;
  position: relative;
  width: 40px;
  padding: 2px;
  justify-items: center;

  &:before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    content: '';
    height: 26px;
    width: 20px;
    border: 4px solid ${props => props.theme.lead};
    position: absolute;
    top: 50%;
    margin-top: -13px;
    margin-left: -10px;
    left: 100%;
    border-radius: 4px;
  }
`;

const Steam = styled.div`
  height: 20px;
  width: 8px;
  background: ${props => props.theme.lead};
  opacity: .3;
  -webkit-animation: coffee 2s infinite;
  animation: coffee 2s infinite;
`;

const StripeFirst = styled(Steam)`
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
`;

const StripeSecond = styled(Steam)`
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
`;

const StripeThird = styled(Steam)`
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
`;

export {Cup, StripeFirst, StripeSecond, StripeThird}
export default LoaderStyled;
