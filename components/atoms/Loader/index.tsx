import LoaderStyled, {Cup, StripeFirst, StripeSecond, StripeThird} from './Loader.styled';

const Loader = (): JSX.Element => (
  <LoaderStyled>
    <Cup>
      <StripeFirst />
      <StripeSecond />
      <StripeThird />
    </Cup>
  </LoaderStyled>
);

export default Loader;
