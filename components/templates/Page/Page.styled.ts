import styled from 'styled-components';

const PageContent = styled.div`
  z-index: 1;
`;

const PageMain = styled.main`
  height: 100%;
  display: grid;
  grid-template-rows: 2fr 1fr 6fr 2fr;
`;

export {PageMain, PageContent};

